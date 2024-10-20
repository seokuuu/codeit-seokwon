// src/components/Header.tsx
import Link from "next/link";
import HeaderLogo from "./icons/HeaderLogo";
import HeaderText from "./icons/HeaderText";

export default function Header() {
  return (
    <header className="container mx-auto h-[40px] w-full flex items-center">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <HeaderLogo />
        </Link>
        <Link href="/" className="ml-2">
          <HeaderText className="block desktop:block tablet:block mobile:hidden" />
        </Link>
      </div>
    </header>
  );
}
