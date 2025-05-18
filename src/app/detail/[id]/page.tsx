"use client";

import PageLayout from "@/app/components/PageLayout";
import DetailTitle from "./components/DetailTitle";
import DetailContent from "./components/DetailContent";
import { useParams } from "next/navigation";
import DetailButtons from "./components/DetailButtons";
import useTodoDetail from "@/hooks/useTodoDetail";

export default function Detail() {
  const params = useParams();
  const id = params.id as string;

  const { todo, setTodo, handleChange } = useTodoDetail(id);

  // 페이지 자체가 클라이언트 렌더링이라 받아오는 과정에 로딩 fallback을 넣었습니다.
  if (todo.id === 0)
    return <PageLayout className="bg-white mt-6">로딩중입니다...</PageLayout>;
  return (
    // 공통 레이아웃
    <PageLayout className="bg-white">
      <section className="flex-1 px-25.25 max-[744px]:px-0">
        {/* 상세 페이지 Todo 타이틀 */}
        <DetailTitle
          name={todo.name}
          isCompleted={todo.isCompleted}
          setTodo={setTodo}
        />
        {/* 상세 페이지 Todo 이미지, 메모 컨테이너 */}
        <DetailContent
          imageUrl={todo.imageUrl}
          memo={todo.memo}
          setTodo={setTodo}
          handleChange={handleChange}
        />
        {/* 상세 페이지 수정, 삭제 버튼 래퍼 */}
        <DetailButtons {...todo} />
      </section>
    </PageLayout>
  );
}
