"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type TNavLink = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: TNavLink) {
  const path = usePathname();
  const active = href === path;

  return (
    <div className={`${!active ? "hover:scale-105 transistion duration-75 ease-out" : ""}`}>
      <Link
        className={`
        ${
          active
            ? "underline underline-offset-8 decoration-pink-500 decoration-2 "
            : ""
        }
      `}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
}
