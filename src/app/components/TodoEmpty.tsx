import Image from "next/image";
import { EMPTY_CONTENT } from "../constants/todoEmpty";

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
