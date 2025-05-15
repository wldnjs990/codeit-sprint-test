import Image from "next/image";
import checkedImg from "@/assets/images/checked-img.png";
import notCheckedImg from "@/assets/images/not-checked-img.png";

export default function TodoListItem() {
  return (
    <div className="w-full h-12.5 border-2 border-slate-900 rounded-3xl cursor-pointer flex gap-4 px-2.5 py-[7px] items-center">
      <Image
        src={notCheckedImg}
        alt="체크 안됨 이미지"
        width={32}
        height={32}
      />
      {"비타민 챙겨 먹기"}
    </div>
  );
}
