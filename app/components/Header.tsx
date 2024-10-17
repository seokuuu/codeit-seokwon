// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          투두 리스트 헤더
        </Link>
        {/* 필요한 경우 추가 네비게이션 항목을 여기에 추가할 수 있습니다 */}
      </nav>
    </header>
  );
}
