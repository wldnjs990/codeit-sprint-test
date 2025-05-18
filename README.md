## 코드잇 스프린트 과제 테스트

사용한 기술스택 : <br/>
Next.js, TypeScript, Tailwind(twMerge)

## 구현 과제 내용
### 1. 디자인 시안에 따른 컬러 시스템 구현
- 컬러 시스템 전용 css파일을 따로 관리해 globals.css파일에서 통합적으로 관리했습니다.
<img width="398" alt="image" src="https://github.com/user-attachments/assets/c1518965-aae3-43ba-be0b-c36bfc7ba815" />

### 2. 공용 컴포넌트 작성
- 컴포넌트 props로 전송되는 enum 타입값을 key로 사용해 각각에 사용해야 하는 컴포넌트 기능들을 객체로 관리했습니다.
#### 1. 수정, 삭제, 추가 버튼
<img width="920" alt="image" src="https://github.com/user-attachments/assets/d0ba92f9-2e8b-43c1-9805-bc997aa07624" />
<br/>
<img width="942" alt="image" src="https://github.com/user-attachments/assets/82474763-f053-4e55-9f1a-4cb5d5ef764b" />
<br/>
<img width="944" alt="image" src="https://github.com/user-attachments/assets/ed58743c-91ed-4cfe-8a90-c612cf493ead" />
<br/>
<img width="942" alt="image" src="https://github.com/user-attachments/assets/f4856019-04e5-45e1-84c1-0a5fb1bee581" />

#### 2. 페이지 레이아웃
<img width="918" alt="image" src="https://github.com/user-attachments/assets/9cab5acd-9845-48a7-89fc-b00b11593983" />

#### 3. Todo 리스트 체크리스트 프레임
<img width="937" alt="image" src="https://github.com/user-attachments/assets/66959743-838f-4879-9fca-7e9648c32147" />
<br/>
<img width="934" alt="image" src="https://github.com/user-attachments/assets/af505b51-40d4-4515-9780-4e9395ad3d3a" />

#### 4. Todo 체크리스트 아이템
<img width="929" alt="image" src="https://github.com/user-attachments/assets/36806a1c-a00f-4d49-9242-140855600422" />
<br/>
<img width="919" alt="image" src="https://github.com/user-attachments/assets/64a630d3-9ce4-4cb2-9578-bbfea96f2b44" />

### 3. 반응형 웹 디자인
- 테일윈드의 반응형 유틸리티 클래스를 활용해 요구하는 화면 사이즈별로 다르게 보여줘야 하는 요소들의 스타일을 수정했습니다.
<img width="488" alt="image" src="https://github.com/user-attachments/assets/d874594f-1fe8-452f-99f0-70a26ccb35ec" />
<br/>
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/ef50b7ea-a76a-4d67-b8e6-f34d9d02ba3a" />
<br/>
<img width="739" alt="image" src="https://github.com/user-attachments/assets/4bd78587-a145-47e9-a9ec-4f5b2662ced6" />

### 4. 할 일 목록 페이지
#### 1. 할 일 목록 조회 기능
![할 일 조회](https://github.com/user-attachments/assets/a01c17bb-601e-44dd-8e30-d52934f0ffa6)

#### 2. 할 일 추가 기능
![화면 기록 2025-05-18 오후 3 16 57](https://github.com/user-attachments/assets/5d01c92c-bdc6-46b5-86a9-705fe92ef2b8)

#### 3. 할 일 완료 처리
![할 일 체크](https://github.com/user-attachments/assets/63cb3d87-a56d-4cb8-9bc5-e0d9f84319ec)

### 5. 할 일 상세 페이지
#### 1. 할 일 수정 기능
![제목 수정](https://github.com/user-attachments/assets/ad0c1c84-07a5-4239-bac2-34d4dd4bf1e8)
![사진 수정](https://github.com/user-attachments/assets/8e80968c-e6f5-45fa-bfa8-f1e665b87b51)
![수정완료](https://github.com/user-attachments/assets/51c24c91-cd64-4357-92a6-db79e75781a1)

#### 2. 할 일 삭제 기능
![할 일 삭제](https://github.com/user-attachments/assets/58f9a422-17d5-4f8c-9065-8336241f6631)

