import "./globals.css";
import NavBar from "./NavBar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="text-slate-900 bg-slate-100 dark:text-slate-100 dark:bg-slate-900">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
