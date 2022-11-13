import React from "react";
import NavLink from "./nav-link";
import ThemeButton from "./themeButton";
import { Disclosure } from "@headlessui/react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Meetings",
    href: "/meetings",
  },
  {
    name: "Donate",
    href: "/virtual-basket",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Other Meetings",
    href: "/other-meetings",
  },
];

export default function NavBar() {
  return (
    <header className="relative z-10">
      <nav className="flex py-2 px-8 sm:px-32 2xl:px-64 shadow-lg rounded-b-lg dark:bg-slate-900 bg-slate-50">
        <div className="flex-col text-center xl:w-[160px]">
          <h1 className="text-lg xl:text-2xl">Serenity House</h1>
          <h2 className="text-[0.6rem] font-light -mt-1 xl:text-xs xl-mt-0">
            Charlevoix Alano Club
          </h2>
        </div>
        {/* Hide desktop navs on mobile */}
        <div className="flex-grow justify-center items-center hidden lg:flex">
          <div className="space-x-8 flex">
            {links.map((link, idx) => (
              <NavLink key={idx} href={link.href} mobile={false}>
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
        {/* show on lg */}
        <div className="hidden lg:flex flex-initial justify-center items-center xl:w-[160px]">
          <ThemeButton className="bg-slate-300 dark:bg-slate-600" />
        </div>
        {/* hide on lg */}
        <div className="flex flex-auto justify-end items-center lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
