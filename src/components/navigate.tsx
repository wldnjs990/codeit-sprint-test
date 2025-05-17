"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigate() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  // 이미지 소스를 바꾸는 반응형은 클라이언트 기능을 사용해야해서 어쩔수 없이 이것도 클라이언트 컴포넌트가 되네요..
  useEffect(() => {
    // matchMedia 메서드를 사용해 375px을 넘어가거나 줄어들떄 변경 사항(boolean)을 isMobile 상태에 저장합니다.
    const mediaQuery = window.matchMedia("(max-width: 375px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange(); // 초기값 설정
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className="border-b border-b-slate-200 w-full bg-white fixed top-0 left-0 z-40">
      <nav className="flex max-w-[1200px] w-full mx-auto max-[744px]:px-4 py-2.5">
        <Link href={"/"}>
          <img
            // 모바일 상태에 따라 로고 형태 변경
            src={`${isMobile ? "/mobile-logo.svg" : "/logo.svg"}`}
            alt="로고"
          />
        </Link>
      </nav>
    </header>
  );
}
