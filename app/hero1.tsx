import Image from "next/image";
import Link from "next/link";
import React from "react";
import alanoClub from "../public/Clubhouse1440.webp";

export default function Hero1() {
  return (
    <>
      <div className="flex justify-center p-16">
        <div className="flex flex-col self-center items-center px-32 space-y-16">
          <h3 className="dark:text-slate-200 text-3xl text-center">Welcome to the <span className="block text-6xl dark:text-slate-100 font-semibold">Serenity House</span></h3>
          <Link href="/meetings" className="px-6 py-2 bg-slate-600 text-slate-100 rounded-2xl text-center w-48 font-semibold tracking-wide">Find a Meeting</Link>
        </div>
        <Image
          src={alanoClub}
          alt="Front door of the Charlevoix Alano Club"
          className="rounded-xl"
          height={600}
        />
      </div>
      <div>
        <h4 className="text-center p-32 text-4xl font-semibold">More stuff</h4>
      </div>
    </>
  );
}
