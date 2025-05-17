"use client";

import PageLayout from "@/components/PageLayout";
import SearchSection from "@/components/SearchSection";
import TodoSection from "@/components/TodoSection";
import { getTodo } from "@/lib/get-todo";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [todos, setTodos] = useState<TodoData[]>([]);

  useEffect(() => {
    getTodo() //
      .then((data: TodoData[]) => {
        setTodos(data);
      })
      .then(() => setLoaded(true));
  }, []);
  return (
    // 공통 페이지 레이아웃
    <PageLayout>
      {/* Todo 추가 섹션으로 이동 */}
      <SearchSection setTodos={setTodos} />
      {/* Todo 리스트 아이템 섹션으로 이동 */}
      <TodoSection todos={todos} setTodos={setTodos} loaded={loaded} />
    </PageLayout>
  );
}
