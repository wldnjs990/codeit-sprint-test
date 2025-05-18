import TodoEmptyLargeImg from "@/assets/images/todo-empty-large-img.png";
import DoneEmptyLargeImg from "@/assets/images/done-empty-large-img.png";

// Frame Type에 따라 객체 데이터 제공
export const EMPTY_CONTENT = {
  DONE: {
    img: DoneEmptyLargeImg,
    text: "할 일이 없어요.\nTODO를 새롭게 추가해주세요!",
    alt: "Done 비엇음 이미지",
  },
  TODO: {
    img: TodoEmptyLargeImg,
    text: "아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!",
    alt: "Todo 비엇음 이미지",
  },
};
