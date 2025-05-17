interface UrlType {
  url: string;
}
export const postImageUpload = async (
  formData: FormData
): Promise<UrlType | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CODEIT_API_URL}/anjiwon/images/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    if (!response.ok) throw new Error("전송과정에서 오류가 발생했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
