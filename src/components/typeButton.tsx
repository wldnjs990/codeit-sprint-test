"use client";

import { CancelIcon, CheckIcon, SmallPlusIcon } from "@/assets/icons";
import { twMerge } from "tailwind-merge";
import Shadow from "./Shadow";
import { postTodo } from "@/lib/post-todo";
import { Dispatch, SetStateAction } from "react";
import { patchTodo } from "@/lib/patch-todo";
import { useRouter } from "next/navigation";
import { deleteTodo } from "@/lib/delete-todo";

// Type에 따라 객체 데이터 제공
// 이런 방식을 조건 분기 데이터화(data-driven branching)이라고 이름짓는거 같네
const TYPE_BUTTON_CONTENT = {
  Add: {
    text: "추가하기",
    btnStyle:
      "bg-slate-200 hover:bg-violet-600 hover:text-white max-[375px]:text-[0px] max-[375px]:px-4.25",
    Icon: SmallPlusIcon,
    iconColor: "group-hover:text-white",
  },
  Delete: {
    text: "삭제하기",
    btnStyle: "bg-rose-500 text-white",
    Icon: CancelIcon,
    iconColor: "text-white",
  },
  Edit: {
    text: "수정완료",
    btnStyle: "bg-slate-200 hover:bg-lime-300",
    Icon: CheckIcon,
    iconColor: "text-slate-900",
  },
};

// 총 3가지 버튼(추가, 수정, 삭제)에 대해 재사용을 해야해 props를 통해 버튼의 타입을 받게 했습니다.
// Type에 따라 각각의 기능을 수행할 수 있도록 TYPE_BUTTON_CONTENT라는 객체를 만들어 Type별로 기능들을 정리해서 사용하고 있습니다.
export default function TypeButton({
  Type,
  searchText = "",
  id,
  requestBody,
  setSearchText,
  setTodos,
}: {
  Type: "Add" | "Delete" | "Edit";
  searchText?: string;
  id?: number;
  requestBody?: EditRequest;
  setSearchText?: Dispatch<SetStateAction<string>>;
  setTodos?: Dispatch<SetStateAction<TodoData[]>>;
}) {
  const { text, btnStyle, Icon, iconColor } = TYPE_BUTTON_CONTENT[Type];
  const route = useRouter();

  // 핸들링 이벤트들
  const handleAddClick = async () => {
    const response = await postTodo(searchText);
    if (response && setTodos && setSearchText) {
      setTodos((prev) => [response, ...prev]);
      setSearchText("");
    }
  };
  const handleDeleteClick = async () => {
    if (!id) return;
    deleteTodo(id) //
      .then(() => {
        alert("삭제 성공!");
        route.push("/");
      })
      .catch(() => alert("삭제 처리중 오류가 발생했습니다."));
  };
  const handleEditClick = async () => {
    if (!requestBody || !id) return;
    patchTodo(id, requestBody) //
      .then(() => {
        alert("수정 완료!");
        route.push("/");
      })
      .catch(() => alert("수정 처리중 오류가 발생했습니다."));
  };

  // 클릭 이벤트 핸들러 객체
  const CLICK_HANDLER = {
    Add: handleAddClick,
    Delete: handleDeleteClick,
    Edit: handleEditClick,
  };
  const onClick = CLICK_HANDLER[Type];

  // 흠 twmerge를 사용할까
  const buttonClass = twMerge(
    "flex text-[16px] gap-1 rounded-3xl py-4.25 px-10 border-2 border-slate-900 cursor-pointer md-bold group",
    `${btnStyle}`
  );
  const plusIconClass = twMerge("w-4 h-4 text-slate-900", `${iconColor}`);
  return (
    <div className="relative z-0">
      {/* 버튼용 그림자 */}
      {/* 디자인에 그림자가 있어 가상요소와 컴포넌트 방식을 고민하다 가상요소는 테일윈드 코드가 너무 긴 거 같아 컴포넌트를 택했습니다. */}
      <Shadow />
      <button className={buttonClass} onClick={onClick}>
        {/* 공통 아이콘 컴포넌트 */}
        {/* TYPE_BUTTON_CONTENT에서 구조분해할당한 컴포넌트로 사용하고 있습니다. */}
        {/* svgr을 사용해 svg를 컴포넌트로 만들어 상호작용 가능한 스타일을 부여했습니다. */}
        <Icon className={plusIconClass} />
        {text}
      </button>
    </div>
  );
}
