import Link from "next/link";

export default function Navigate() {
  return (
    <header className="border-b border-b-slate-200 w-full bg-white fixed top-0 left-0 z-40">
      <nav className="flex max-w-[1200px] w-full mx-auto px-6 py-2.5">
        <Link href={"/"}>
          <img src="/logo.svg" alt="로고" />
        </Link>
      </nav>
    </header>
  );
}
