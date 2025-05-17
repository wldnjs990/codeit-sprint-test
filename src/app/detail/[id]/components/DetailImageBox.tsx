"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

import Image from "next/image";
import defaultImg from "@/assets/images/default-img.png";
import ImageButton from "./ImageButton";
import { postImageUpload } from "@/lib/post-image-upload";

interface DetailImageBox {
  imageUrl: string | null;
  setTodo: Dispatch<SetStateAction<TodoData>>;
}
export default function DetailImageBox({ imageUrl, setTodo }: DetailImageBox) {
  // preview이미지 경로, 전송파일 추출하는 핸들러
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files || files.length === 0) return;

    // 서버로 전송할 이미지 파일 데이터 정제
    const file = files[0];

    // 이미지의 이름과 파일사이즈 추출
    const { name, size } = files[0];
    // 이미지 최대 사이즈(5MB)
    const MAX_SIZE = 5 * 1024 * 1024;

    // 파일명이 영어로만 지어졌는지 확인
    if (!/^[a-zA-Z0-9_.-]+$/.test(name))
      return alert("영어 이외의 파일명은 업로드할 수 없습니다.");
    // 사이즈가 5MB를 넘지 않는지 확인
    if (size > MAX_SIZE)
      return alert("5MB 이상의 파일은 업로드할 수 없습니다.");

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

  return (
    <div className="w-96 max-[744px]:w-full h-[311px] dashed-line bg-slate-50 rounded-3xl">
      {/* input은 숨기고 label로 input의 역할을 수행하도록 설계 */}
      <input
        id="img-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleChange(e)}
      />
      <label
        htmlFor="img-upload"
        className="w-full h-full flex items-center justify-center relative cursor-pointer"
      >
        {/* 이미지 유무에 따라 빈 화면, 이미지 화면 분기처리 */}
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt="미리보기 이미지"
              className="w-full h-full object-fill rounded-3xl"
            />
            <ImageButton isUploaded={true} />
          </>
        ) : (
          <>
            <Image
              src={defaultImg}
              alt="기본 이미지"
              width={54}
              height={54}
              className="w-13.5 h-13.5"
            />
            <ImageButton isUploaded={false} />
          </>
        )}
      </label>
    </div>
  );
}
