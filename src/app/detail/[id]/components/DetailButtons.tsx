import TypeButton from "@/app/components/TypeButton";

export default function DetailButtons({ id, name, memo, imageUrl }: TodoData) {
  const requestBody = {
    name: name ?? "",
    memo: memo ?? "",
    imageUrl: imageUrl ?? "",
  };
  return (
    <div className="flex justify-end max-[744px]:justify-center">
      <div className="flex min-[375px]:gap-4 mt-6 max-[375px]:justify-between">
        {/* 수정 버튼 */}
        <TypeButton Type="Edit" id={id} requestBody={requestBody} />
        {/* 삭제 버튼 */}
        <TypeButton Type="Delete" id={id} />
      </div>
    </div>
  );
}
