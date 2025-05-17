// Todo request값 타입
interface TodoData {
  id: number;
  tenantId: string;
  name: string;
  memo: string;
  imageUrl: string | null;
  isCompleted: boolean;
}

// 수정 Request값 타입(extends 쓸까 고민하다 굳이? 라는 생각이 들어 TodoData에 extends 하진 않았습니다.)
interface EditRequest {
  name: string;
  memo: string;
  imageUrl: string | null;
}
