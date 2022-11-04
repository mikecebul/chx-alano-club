import alanoClub from "../public/Clubhouse1440.webp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row h-[calc(100vh_-_5rem)] p-16">
      <div className="w-1/2 self-center">
        <h3 className="font-semibold text-4xl text-center">Hello World</h3>
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <Image
          src={alanoClub}
          alt="Front door of the Charlevoix Alano Club"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
