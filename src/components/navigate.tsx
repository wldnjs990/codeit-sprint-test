"use client";
import Image from "next/image";
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
          {/* 모바일 상태에 따라 로고 형태 변경 */}
          {/* 첫 화면에 보이는 로고나 배너, 썸네일 등에 priority를 사용하면 next가 preload를 통해 LCP속도를 최적화시켜준다고 합니다. */}
          {isMobile ? (
            <Image
              src="/mobile-logo.svg"
              alt="모바일 로고"
              width={71}
              height={40}
              className="w-[71px] h-10"
              priority
            />
          ) : (
            <Image
              src="/logo.svg"
              alt="모바일 로고"
              width={151}
              height={40}
              className="w-[151px] h-10"
              priority
            />
          )}
        </Link>
      </nav>
    </header>
  );
}
