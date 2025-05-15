import Image from "next/image";
import TodoFrame from "./TodoFrame";

import TodoListItem from "./TodoListItem";

export default function TodoSection() {
  return (
    <section className="w-full flex gap-6 mt-10">
      <TodoFrame FrameType="TODO">
        <TodoListItem />
      </TodoFrame>
      <TodoFrame FrameType="DONE">
        <TodoListItem />
      </TodoFrame>
    </section>
  );
}
