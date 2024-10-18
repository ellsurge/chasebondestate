"use client";
import Preloader from "@/components/Preloader";
import "../../styles/globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && isHome}
        {/* <Preloader /> */}
        {children}
      </body>
    </html>
  );
}
