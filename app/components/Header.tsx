// src/components/Header.tsx
import Link from "next/link";
import HeaderLogo from "./icons/HeaderLogo";
import HeaderText from "./icons/HeaderText";

export default function Header() {
  return (
    <header className="h-[45px] w-full border border-b-1 bg-bgPrimary">
      <div className="flex items-center container mx-auto">
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
