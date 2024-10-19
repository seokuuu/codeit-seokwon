// src/components/Header.tsx
import Link from "next/link";
import HeaderLogo from "./icons/HeaderLogo";
import HeaderText from "./icons/HeaderText";

export default function Header() {
  return (
    <header className=" container mx-auto h-[40px] w-full border">
      <Link href="/" className="flex text-2xl font-bold">
        <HeaderLogo />
        <HeaderText className="block desktop:block tablet:block mobile:hidden" />
      </Link>
    </header>
  );
}
