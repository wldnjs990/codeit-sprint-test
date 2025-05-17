"use client";

import { Dispatch, SetStateAction } from "react";

import DetailImageBox from "./DetailImageBox";
import DetailMemo from "./DetailMemo";

interface DetailContent extends TodoData {
  setTodo: Dispatch<SetStateAction<TodoData>>;
}
export default function DetailContent({
  imageUrl,
  memo,
  setTodo,
}: DetailContent) {
  return (
    <div className="mt-6 flex gap-6 max-[744px]:flex-col">
      {/* 상세 페이지 이미지 박스 */}
      <DetailImageBox imageUrl={imageUrl} setTodo={setTodo} />
      {/* 상세 페이지 메모 박스 */}
      <DetailMemo memo={memo ?? ""} setTodo={setTodo} />
    </div>
  );
}
