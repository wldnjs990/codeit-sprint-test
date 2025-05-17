export const patchTodo = async (
  id: number,
  requestBody: Partial<{
    name: string;
    memo: string;
    imageUrl: string | null;
    isCompleted: boolean;
  }>
): Promise<TodoData | null> => {
  // Object.fromEntries란? = [[key, value]]로 구성되어있는 배열 자료형을 객체 자료형으로 바꿔주는 메서드
  // Object.entries란? = 객체형식의 데이터를 [[key, value]]형태의 배열 자료형으로 바꿔주는 메서드
  // filter 함수에서 첫 번째 인자를 쓰지 않으면 빈값으로 넣어두면 됨(_를 넣어서 의도를 표시하는 방법이 있긴 한데 린트가 뭐라함)
  const body = Object.fromEntries(
    Object.entries(requestBody).filter(([, v]) => v !== undefined)
  );
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CODEIT_API_URL}/anjiwon/items/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    if (!response.ok) throw new Error("전송과정에서 오류가 발생했습니다.");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
