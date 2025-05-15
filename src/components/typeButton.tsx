"use client";
import { CancelIcon, CheckIcon, SmallPlusIcon } from "@/assets/icons";
import { twMerge } from "tailwind-merge";
import Shadow from "./Shadow";
export default function TypeButton({
  Type,
  Size,
  State,
  Hovered = false,
}: {
  Type: "Add" | "Delete" | "Edit";
  Size: "Large";
  State: "Default" | "Active";
  Hovered: boolean;
}) {
  const CONTENT = {
    Add: "추가하기",
    Delete: "삭제하기",
    Edit: "수정완료",
  };

  // 버튼 색상
  const BUTTON_COLOR = {
    Add: "bg-slate-200 hover:bg-violet-600 hover:text-white",
    Delete: "bg-rose-500 text-white",
    Edit: "bg-slate-200 hover:bg-lime-300 ",
  };

  // 현재 아이콘
  const ICON = {
    Add: SmallPlusIcon,
    Delete: CancelIcon,
    Edit: CheckIcon,
  };
  const NowIcon = ICON[Type];
  // 아이콘 색상
  const ICON_COLOR = {
    Add: "group-hover:text-white",
    Delete: "text-white",
    Edit: "text-slate-900",
  };

  // 흠 twmerge를 사용할까
  const buttonClass = twMerge(
    "flex text-[16px] gap-1 rounded-3xl py-4.25 px-10 border-2 border-slate-900 cursor-pointer md-Bold group",
    `${BUTTON_COLOR[Type]}`
  );
  const plusIconClass = twMerge(
    "w-4 h-4 text-slate-900",
    `${ICON_COLOR[Type]}`
  );
  return (
    <div className="relative">
      <button className={buttonClass}>
        <NowIcon className={plusIconClass} />
        {CONTENT[Type]}
      </button>
      <Shadow />
    </div>
  );
}
