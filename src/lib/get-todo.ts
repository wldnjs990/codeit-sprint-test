export const getTodo = async (): Promise<TodoData[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CODEIT_API_URL}/anjiwon/items`
    );
    if (!response.ok)
      throw new Error("데이터를 받아오는 도중 에러가 발생했습니다.");
    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};
