export const getTodoOne = async (id: string): Promise<TodoData | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CODEIT_API_URL}/anjiwon/items/${id}`
    );
    if (!response)
      throw new Error("데이터를 받아오는 도중 에러가 발생했습니다.");
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
