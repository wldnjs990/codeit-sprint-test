"use client";

import { Dispatch, SetStateAction } from "react";

interface DetailMemo {
  memo: string;
  setTodo: Dispatch<SetStateAction<TodoData>>;
}
export default function DetailMemo({ memo, setTodo }: DetailMemo) {
  return (
    <div className="bg-[url(/memo-theme.svg)] flex-1 min-h-[311px] p-4 flex flex-col gap-4 items-center bg-amber-50 rounded-3xl ">
      <p className="md-extrabold text-amber-800">Memo</p>
      {/* 메모 텍스트 공간 */}
      <textarea
        value={memo ?? ""}
        onChange={(e) =>
          setTodo((prev) => {
            return { ...prev, memo: e.target.value };
          })
        }
        className="flex-1 w-full resize-none scroll-custom"
      />
    </div>
  );
}
