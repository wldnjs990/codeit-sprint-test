"use client";

import Image from "next/image";
import checkedImg from "@/assets/images/checked-img.png";
import notCheckedImg from "@/assets/images/not-checked-img.png";
import { twMerge } from "tailwind-merge";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface DetailTitle extends TodoData {
  setTodo: Dispatch<SetStateAction<TodoData>>;
}
export default function DetailTitle({
  name,
  isCompleted,
  setTodo,
}: DetailTitle) {
  const titleStyle = twMerge(
    "w-full py-4 mt-6 flex gap-4 items-center justify-center border-2 border-slate-900 rounded-3xl",
    `${isCompleted ? "bg-violet-200" : "bg-white"}`
  );
  // input 넓이 자동측정용 ref객체
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // title바 수정 트리거
  const [isEdit, setIsEdit] = useState<boolean>(false);

  /* 즉시 수정 가능한 input창을 만드려니 input의 넓이가 고정적으로 잡히는 현상이 있었습니다. */
  /* 이를 해결하기 span태그를 만들어 실제 span의 길이만큼 input의 넓이를 업데이트 해주는 방식을 사용했습니다. */
  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      const spanWidth = spanRef.current.offsetWidth;
      // 최소 60px 보장
      inputRef.current.style.width = `${Math.max(spanWidth, 60)}px`;
    }
  }, [name, isEdit]);
  // 차라리 title은 span으로 보이게 처리해놓고, 창을 클릭하면 input창으로 변경시켜 수정하는 방식은 어떨까?

  // isEdit의 상태가 비동기적으로 변경된 시점에 block으로 변한 inputRef에 focus 부여
  useEffect(() => {
    if (isEdit && inputRef.current) inputRef.current.focus();
  }, [isEdit]);
  return (
    <div className={titleStyle}>
      <Image
        src={isCompleted ? checkedImg : notCheckedImg}
        alt="체크됨 이미지"
        width={32}
        height={32}
        className="w-8 h-8"
      />

      <span
        ref={spanRef}
        className={twMerge(
          "xl-bold underline overflow-hidden text-ellipsis whitespace-nowrap max-w-[70%]",
          `${isEdit && "invisible absolute"}`
        )}
        onClick={() => {
          if (!inputRef.current) return;
          setIsEdit(true);
        }}
      >
        {name || ""}
      </span>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) =>
          setTodo((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
        onKeyDown={(e) => {
          if (e.key !== "Enter" || !spanRef.current) return;
          setIsEdit(false);
        }}
        className={twMerge(
          "hidden xl-bold underline max-w-[80%]",
          `${isEdit ? "block" : "hidden"}`
        )}
      />
    </div>
  );
}
