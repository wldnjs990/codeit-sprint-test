"use client";

import { ChangeEvent } from "react";

import Image from "next/image";
import defaultImg from "@/assets/images/default-img.png";
import ImageButton from "./ImageButton";

interface DetailImageBox {
  imageUrl: string | null;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
}
export default function DetailImageBox({
  imageUrl,
  handleChange,
}: DetailImageBox) {
  return (
    <div className="w-96 max-[744px]:w-full h-[311px] dashed-line bg-slate-50 rounded-3xl">
      {/* input은 숨기고 label로 input의 역할을 수행하도록 설계 */}
      <input
        id="img-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleChange(e)}
      />
      <label
        htmlFor="img-upload"
        className="w-full h-full flex items-center justify-center relative cursor-pointer"
      >
        {/* 이미지 유무에 따라 빈 화면, 이미지 화면 분기처리 */}
        {imageUrl ? (
          <>
            <Image
              src={imageUrl}
              alt="미리보기 이미지"
              fill
              className="object-fill rounded-3xl"
              sizes="(max-width: 744px) 100vw, 384px"
            />
            <ImageButton isUploaded={true} />
          </>
        ) : (
          <>
            <Image
              src={defaultImg}
              alt="기본 이미지"
              width={54}
              height={54}
              className="w-13.5 h-13.5"
            />
            <ImageButton isUploaded={false} />
          </>
        )}
      </label>
    </div>
  );
}
