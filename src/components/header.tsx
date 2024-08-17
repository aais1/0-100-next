"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  if (pathname === "/signin" || pathname === "/signup")
    return (
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <Link href={"/"}>
          <h1 className="text-xl font-semibold">Next 0-100</h1>
        </Link>
      </header>
    );

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href={"/"}>
        <h1 className="text-xl font-semibold">Next 0-100</h1>
      </Link>
      <Link
        href={"/signin"}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Sign In
      </Link>
    </header>
  );
}
