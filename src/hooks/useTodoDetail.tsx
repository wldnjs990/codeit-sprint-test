import { getTodoOne } from "@/lib/get-todo-one";
import { postImageUpload } from "@/lib/post-image-upload";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

export default function useTodoDetail(id: string) {
  const [todo, setTodo] = useState<TodoData>({
    id: 0,
    tenantId: "",
    name: "",
    memo: "",
    imageUrl: null,
    isCompleted: false,
  });

  // 클라이언트로 todo디테일 데이터 가져오기(싹 다 클라이언트 컴포넌트 사용하면 이게 리액트랑 뭐가 다르지 흠)
  const getTodoDetail = useCallback(async () => {
    const todo = await getTodoOne(id);
    if (todo) setTodo(todo);
  }, [id]);

  useEffect(() => {
    getTodoDetail();
  }, [getTodoDetail]);

  // preview이미지 경로, 전송파일 추출하는 핸들러
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // 전송할 데이터의 파일명이 영어로만 이루어져 있는지, 5MB 이하인지 검사(true면 다음단계, false면 중지)
    const file = validateChangeImg(e);
    if (!file) return;

    try {
      // 서버로 전달하는 이미지 데이터로 변환하기 위해선 FormData(배열?)를 생성해서 swagger에서 요구하는 "image"필드에 file데이터를 담아야 한다.
      const formData = new FormData();
      formData.append("image", file);

      const fileTransfer = await postImageUpload(formData);
      if (!fileTransfer)
        throw new Error("파일 전송과정에서 오류가 발생했습니다.");

      setTodo((prev) => ({ ...prev, imageUrl: fileTransfer.url }));
    } catch (error) {
      console.error(error);
    }
  };

  // 전송할 데이터의 파일명이 영어로만 이루어져 있는지, 5MB 이하인지 판별하는 비즈니스 로직 분리
  const validateChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files || files.length === 0) return;

    // 서버로 전송할 이미지 파일 데이터 정제
    const file = files[0];
    // 이미지의 이름과 파일사이즈 추출
    const { name, size } = file;
    // 이미지 최대 사이즈(5MB)
    const MAX_SIZE = 5 * 1024 * 1024;

    if (!/^[a-zA-Z0-9_.-]+$/.test(name)) {
      // 파일명이 영어로만 지어졌는지 확인
      alert("영어 이외의 파일명은 업로드할 수 없습니다.");
      return null;
    } else if (size > MAX_SIZE) {
      // 사이즈가 5MB를 넘지 않는지 확인
      alert("5MB 이상의 파일은 업로드할 수 없습니다.");
      return null;
    } else return file;
  };

  return { todo, setTodo, handleChange };
}
