"use client";

import { Dispatch, SetStateAction, useState } from "react";
import SearchBar from "./SearchBar";
import TypeButton from "./TypeButton";

interface SearchSection {
  setTodos: Dispatch<SetStateAction<TodoData[]>>;
}
export default function SearchSection({ setTodos }: SearchSection) {
  // searchText 공용 상태를 만들어 SearchBar, TypeButton의 API 요청에 필요한 string값으로 사용합니다.
  const [searchText, setSearchText] = useState("");
  return (
    <section className="flex gap-4 max-[375px]:gap-2 mt-6">
      {/* 검색바라고 이름지엇는데 다 만들고보니 추가하기 위한 input이었네요.. */}
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        setTodos={setTodos}
      />
      {/* 추가 버튼 */}
      <TypeButton
        Type="Add"
        searchText={searchText}
        setSearchText={setSearchText}
        setTodos={setTodos}
      />
    </section>
  );
}
