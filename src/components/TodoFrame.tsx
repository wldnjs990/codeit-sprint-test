import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import doneImg from "@/assets/images/done-img.png";
import todoImg from "@/assets/images/todo-img.png";
import TodoListItem from "./TodoListItem";
import TodoEmpty from "./TodoEmpty";

// Frame Type에 따라 객체 데이터 제공
const TODO_CONTENT = {
  DONE: {
    img: doneImg,
    isCompleted: true,
    alt: "Done 이미지",
  },
  TODO: {
    img: todoImg,
    isCompleted: false,
    alt: "Todo 이미지",
  },
};

export default function TodoFrame({
  FrameType,
  todos,
  setTodos,
}: {
  FrameType: "DONE" | "TODO";
  todos: TodoData[];
  setTodos: Dispatch<SetStateAction<TodoData[]>>;
}) {
  const { img, isCompleted, alt } = TODO_CONTENT[FrameType];
  const filteredTodo = todos.filter((todo) =>
    todo.isCompleted ? isCompleted : !isCompleted
  );
  return (
    <div className="flex-1">
      <Image src={img} alt={alt} width={100} height={36} className="w-25 h-9" />
      <div className="mt-4 flex flex-col gap-4">
        {filteredTodo.length ? (
          filteredTodo.map((todo) => {
            return (
              // Todo 체크리스트 아이템
              <TodoListItem
                key={todo.id}
                {...todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          })
        ) : (
          // FrameType 타입에 따라 데이터가 없을시 404? 비엇음? 이미지를 각각 보여줍니다.
          <TodoEmpty FrameType={FrameType} />
        )}
      </div>
    </div>
  );
}
