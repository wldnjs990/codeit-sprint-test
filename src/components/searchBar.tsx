import React from "react";
import Shadow from "./Shadow";

export default function SearchBar() {
  return (
    <div className="relative flex-1">
      <input
        placeholder="할 일을 입력해주세요"
        className="w-full h-full px-6 py-4.25 rounded-3xl border-2 border-slate-900 placeholder:text-slate-500 bg-white grow"
      />
      <Shadow />
    </div>
  );
}
