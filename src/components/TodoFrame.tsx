import Image from "next/image";
import { ReactNode } from "react";
import doneImg from "@/assets/images/done-img.png";
import todoImg from "@/assets/images/todo-img.png";

export default function TodoFrame({
  children,
  FrameType,
}: {
  children: ReactNode;
  FrameType: "DONE" | "TODO";
}) {
  const FrameTypeImg = {
    DONE: doneImg,
    TODO: todoImg,
  };
  return (
    <div className="flex-1">
      <Image
        src={FrameTypeImg[FrameType]}
        alt="Todo 이미지"
        width={100}
        height={36}
      />
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </div>
  );
}
