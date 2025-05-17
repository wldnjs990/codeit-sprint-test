import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function PageLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const layoutStyle = twMerge(
    "max-w-[1200px] w-full min-h-screen flex flex-col pt-15 max-[744px]:px-4 mx-auto",
    `${className}`
  );
  return <section className={layoutStyle}>{children}</section>;
}
