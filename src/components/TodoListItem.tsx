"use clent";

import Image from "next/image";
import checkedImg from "@/assets/images/checked-img.png";
import notCheckedImg from "@/assets/images/not-checked-img.png";
import { patchTodo } from "@/lib/patch-todo";
import { twMerge } from "tailwind-merge";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

// onClick했을때(버튼클릭) : 상세 페이지로 이동
// onClick했을때(체크박스) : completed 상태 바꾸기

// extends로 기존 TodoData + 상태변경 함수 타입도 병합한 타입 제작
interface TodoListItem extends TodoData {
  todos: TodoData[];
  setTodos: Dispatch<SetStateAction<TodoData[]>>;
}
export default function TodoListItem({
  id,
  isCompleted,
  name,
  todos,
  setTodos,
}: TodoListItem) {
  // patch 메서드에 담기는 requestBody
  const requestBody = { isCompleted: !isCompleted };
  // patch 이후 UI 업데이트
  const updateTodoUI = () => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, isCompleted: !isCompleted };
      return todo;
    });
    setTodos(updatedTodos);
  };

  const itemStyle = twMerge(
    "w-full h-12.5 border-2 border-slate-900 text-slate-800 rounded-3xl cursor-pointer flex gap-4 px-2.5 py-[7px] items-center",
    `${isCompleted && "bg-violet-100 line-through"}`
  );
  return (
    <Link href={`/detail/${id}`} className={itemStyle}>
      <Image
        src={isCompleted ? checkedImg : notCheckedImg}
        alt={isCompleted ? "체크 됨 이미지" : "체크 안됨 이미지"}
        width={32}
        height={32}
        className="w-8 h-8"
        onClick={(e) => {
          // 부모 Link로 이벤트가 퍼지는걸 막기 위해 preventDefault를 넣었습니다.
          e.preventDefault();
          patchTodo(id, requestBody);
          updateTodoUI();
        }}
      />
      <p className="overflow-hidden text-ellipsis whitespace-nowrap max-w-[80%]">
        {name}
      </p>
    </Link>
  );
}
