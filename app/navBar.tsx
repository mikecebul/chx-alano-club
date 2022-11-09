import React from "react";
import NavLink from "./nav-link";
import ThemeButton from "./themeButton";

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
    <header className="">
      <nav className="flex py-3 px-16 shadow-lg rounded-b-lg dark:bg-slate-900 bg-slate-50">
        <div className="flex-col text-center">
          <h1 className="text-2xl">Serenity House</h1>
          <h2 className="text-xs">Charlevoix Alano Club</h2>
        </div>
        <div className="flex flex-grow justify-between items-center">
          <div className=" px-16 space-x-8 flex">
            {links.map((link, idx) => (
              <NavLink key={idx} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="px-16">
            <ThemeButton className="bg-slate-300 dark:bg-slate-600" />
          </div>
        </div>
      </nav>
    </header>
  );
}
