export const postTodo = async (text: string): Promise<TodoData | null> => {
  if (!text.trim().length) return null;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CODEIT_API_URL}/anjiwon/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: text,
        }),
      }
    );
    if (!response.ok) throw new Error("전송과정에서 오류가 발생했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
