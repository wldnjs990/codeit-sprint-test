"use client";

import { Dispatch, SetStateAction } from "react";
import TodoFrame from "./TodoFrame";

interface ToDoSection {
  todos: TodoData[];
  setTodos: Dispatch<SetStateAction<TodoData[]>>;
  loaded: boolean;
}
export default function TodoSection({ todos, setTodos, loaded }: ToDoSection) {
  if (!loaded) return <div className="mt-10">로딩중입니다...</div>;
  return (
    <section className="w-full flex gap-6 mt-10 max-[744px]:flex-col">
      {/* 메인 페이지 Todo 체크박스들 */}
      {/* FrameType을 통해 Todo, Done 섹션을 재사용 했습니다. */}
      <TodoFrame FrameType="TODO" todos={todos} setTodos={setTodos} />
      <TodoFrame FrameType="DONE" todos={todos} setTodos={setTodos} />
    </section>
  );
}
