interface DeleteResponse {
  message: string;
}

export const deleteTodo = async (
  id: number
): Promise<DeleteResponse | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CODEIT_API_URL}/anjiwon/items/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok)
      throw new Error("데이터를 삭제하는 도중 에러가 발생했습니다.");
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
