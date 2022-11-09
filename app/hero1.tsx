import Image from "next/image";
import Link from "next/link";
import React from "react";
import alanoClub from "../public/Clubhouse1440.webp";

export default function Hero1() {
  return (
    <>
      <div className="flex flex-col xl:flex-row items-center relative">
        <div className="flex flex-col self-center items-center xl:pl-56 space-y-16 w-1/2 mt-48 xl:mt-0">
          <h3 className="dark:text-slate-200 text-3xl text-center">
            Welcome to the{" "}
            <span className="block text-6xl dark:text-slate-100 font-semibold">
              Serenity House
            </span>
          </h3>
          <Link
            href="/meetings"
            className="transition hover:scale-105 duration-75 px-6 py-2 dark:bg-pink-700 bg-pink-700 text-white rounded-2xl text-center w-48 font-semibold tracking-wide shadow-lg"
          >
            Find a Meeting
          </Link>
        </div>
        <div className="flex flex-1 max-w-2xl relative">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="bg-none absolute inset-0 z-0">
            <polygon points="0,0 0,80 20,0"  className="dark:fill-slate-800"/>
          </svg>
          <Image
            src={alanoClub}
            alt="Front door of the Charlevoix Alano Club"
            className="rounded hidden xl:block object-cover"
          />
        </div>
      </div>
    </>
  );
}
