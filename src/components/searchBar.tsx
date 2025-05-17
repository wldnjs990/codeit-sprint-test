"use client";

import React, { Dispatch, SetStateAction } from "react";
import Shadow from "./Shadow";
import { postTodo } from "@/lib/post-todo";

interface SearchBar {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  setTodos: Dispatch<SetStateAction<TodoData[]>>;
}
export default function SearchBar({
  searchText,
  setSearchText,
  setTodos,
}: SearchBar) {
  const fetchPostTodo = async (text: string) => {
    const response = await postTodo(text);
    if (response) {
      setTodos((prev) => [response, ...prev]);
    }
  };
  return (
    <div className="relative flex-1">
      <input
        placeholder="할 일을 입력해주세요"
        className="w-full h-full px-6 py-4.25 rounded-3xl border-2 border-slate-900 placeholder:text-slate-500 bg-white grow"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.currentTarget.value);
        }}
        onKeyDown={(e) => {
          // IME(조합문자) 사용시 keyDown이벤트가 2번 발생하는 버그가 존재함
          // 윈도우에선 한번도 겪어본적이 없어서 몰랐는데 맥에서 이런걸 겪네
          // e.nativeEvent.isComposing는 현재 IME(조합문자)를 입력중인지 확인하는 속성(boolean)
          if (e.nativeEvent.isComposing) return;
          if (e.key === "Enter") {
            e.preventDefault();
            fetchPostTodo(searchText);
            setSearchText("");
          }
        }}
      />
      {/* 그림자 컴포넌트 */}
      <Shadow />
    </div>
  );
}
