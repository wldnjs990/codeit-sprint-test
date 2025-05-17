import Image from "next/image";
import TodoEmptyLargeImg from "@/assets/images/todo-empty-large-img.png";
import DoneEmptyLargeImg from "@/assets/images/done-empty-large-img.png";

// Frame Type에 따라 객체 데이터 제공
const EMPTY_CONTENT = {
  DONE: {
    img: DoneEmptyLargeImg,
    text: "할 일이 없어요.\nTODO를 새롭게 추가해주세요!",
    alt: "Done 비엇음 이미지",
  },
  TODO: {
    img: TodoEmptyLargeImg,
    text: "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!",
    alt: "Todo 비엇음 이미지",
  },
};

export default function TodoEmpty({
  FrameType,
}: {
  FrameType: "DONE" | "TODO";
}) {
  const { img, text, alt } = EMPTY_CONTENT[FrameType];
  return (
    <div className="pt-16 max-[744px]:pt-0 max-[744px]:pb-12 flex flex-col items-center">
      <Image
        src={img}
        alt={alt}
        width={240}
        height={240}
        className="w-60 h-60 max-[375px]:w-30 max-[375px]:h-30"
      />
      <p className="mt-6 text-center text-slate-400 md-bold">{text}</p>
    </div>
  );
}
