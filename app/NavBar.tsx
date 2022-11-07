import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header>
      <nav className="flex border-b-2 py-4 px-16">
        <div className="flex-col text-center">
          <h1 className="text-2xl">Serenity House</h1>
          <h2 className="text-xs">Charlevoix Alano Club</h2>
        </div>
        <div className="flex flex-grow justify-between items-center">
          <div className=" px-16 space-x-8 flex">
            <Link href={"/"}>Home</Link>
            <Link href={"/meetings"}>Meetings</Link>
          </div>
          {/* <div className="px-16">{renderThemeChanger()}</div> */}
        </div>
      </nav>
    </header>
  );
}
