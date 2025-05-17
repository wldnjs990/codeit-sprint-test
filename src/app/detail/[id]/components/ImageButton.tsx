import Image from "next/image";
import bigPlusImg from "@/assets/images/big-plus-img.png";
import editImg from "@/assets/images/edit-img.png";
import { twMerge } from "tailwind-merge";

export default function ImageButton({ isUploaded }: { isUploaded: boolean }) {
  const buttonStyle = twMerge(
    "w-16 h-16 rounded-full flex items-center justify-center absolute bottom-4 right-4",
    `${
      isUploaded
        ? "bg-slate-900/50 border border-2 border-slate-900"
        : "bg-slate-200 "
    }`
  );
  return (
    // 이미지 추가 버튼인데 조건에 버튼을 눌러야 이미지 선택이 된다가 없어 UX적으로 이미지 아무데나 클릭하면 선택 가능한게 더 좋다 판단해 아이콘 처럼 만들었습니다.
    <div className={buttonStyle}>
      <Image
        src={isUploaded ? editImg : bigPlusImg}
        alt="큰 + 아이콘"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </div>
  );
}
