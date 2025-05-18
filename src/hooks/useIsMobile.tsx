import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    // matchMedia 메서드를 사용해 375px을 넘어가거나 줄어들떄 변경 사항(boolean)을 isMobile 상태에 저장합니다.
    const mediaQuery = window.matchMedia("(max-width: 375px)");
    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange(); // 초기값 설정
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { isMobile, setIsMobile };
}
