"use client";

import PageLayout from "@/components/PageLayout";
import DetailTitle from "./components/DetailTitle";
import DetailContent from "./components/DetailContent";
import { useParams } from "next/navigation";
import { getTodoOne } from "@/lib/get-todo-one";
import { useCallback, useEffect, useState } from "react";
import DetailButtons from "./components/DetailButtons";

export default function Detail() {
  const params = useParams();
  const id = params.id as string;

  // todo데이터 전부 받아와서 수정할 데이터에 필요한 데이터 + set함수를 props로 전송하기
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

  // 페이지 자체가 클라이언트 렌더링이라 받아오는 과정에 로딩 fallback을 넣었습니다.
  if (todo.id === 0)
    return <PageLayout className="bg-white mt-6">로딩중입니다...</PageLayout>;
  return (
    // 공통 레이아웃
    <PageLayout className="bg-white">
      <section className="flex-1 px-25.25 max-[744px]:px-0">
        {/* 상세 페이지 Todo 타이틀 */}
        <DetailTitle {...todo} setTodo={setTodo} />
        {/* 상세 페이지 Todo 이미지, 메모 컨테이너 */}
        <DetailContent {...todo} setTodo={setTodo} />
        {/* 상세 페이지 수정, 삭제 버튼 래퍼 */}
        <DetailButtons {...todo} />
      </section>
    </PageLayout>
  );
}
