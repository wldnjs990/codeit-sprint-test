"use client";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";
import Link from "next/link";

export default function Navigate() {
  // 현재 레이아웃이 모바일 레이아웃인지 측정해주는 커스텀 훅
  const { isMobile } = useIsMobile();

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
