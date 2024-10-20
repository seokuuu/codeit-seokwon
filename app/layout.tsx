// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Todo List",
  description: "A simple todo list application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bgGrey text-gray-900 h-full font-nanumSquare">
        <Header />
        <main className="container mx-auto h-full">{children}</main>
      </body>
    </html>
  );
}
