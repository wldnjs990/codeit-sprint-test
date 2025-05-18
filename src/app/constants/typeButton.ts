// Type에 따라 객체 데이터 제공

import { CancelIcon, CheckIcon, SmallPlusIcon } from "@/assets/icons";

// 이런 방식을 조건 분기 데이터화(data-driven branching)이라고 이름짓는거 같네
export const TYPE_BUTTON_CONTENT = {
  Add: {
    text: "추가하기",
    btnStyle:
      "bg-slate-200 hover:bg-violet-600 hover:text-white max-[375px]:text-[0px] max-[375px]:px-4.25",
    Icon: SmallPlusIcon,
    iconColor: "group-hover:text-white",
  },
  Delete: {
    text: "삭제하기",
    btnStyle: "bg-rose-500 text-white",
    Icon: CancelIcon,
    iconColor: "text-white",
  },
  Edit: {
    text: "수정완료",
    btnStyle: "bg-slate-200 hover:bg-lime-300",
    Icon: CheckIcon,
    iconColor: "text-slate-900",
  },
};
