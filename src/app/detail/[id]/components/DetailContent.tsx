"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";

import DetailImageBox from "./DetailImageBox";
import DetailMemo from "./DetailMemo";

interface DetailContent {
  imageUrl: string | null;
  memo: string;
  setTodo: Dispatch<SetStateAction<TodoData>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
}
export default function DetailContent({
  imageUrl,
  memo,
  setTodo,
  handleChange,
}: DetailContent) {
  return (
    <div className="mt-6 flex gap-6 max-[744px]:flex-col">
      {/* 상세 페이지 이미지 박스 */}
      <DetailImageBox imageUrl={imageUrl} handleChange={handleChange} />
      {/* 상세 페이지 메모 박스 */}
      <DetailMemo memo={memo ?? ""} setTodo={setTodo} />
    </div>
  );
}
