import Link from "next/link";

export default function Navigate() {
  return (
    <header className="border-b border-b-slate-200 bg-white">
      <nav className="flex max-w-[1200px] w-full mx-auto px-6 py-2.5 ">
        <Link href={"/"}>
          <img src="/logo.svg" alt="로고" />
        </Link>
      </nav>
    </header>
  );
}
