import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zulfikar Ditya - Backend Developer",
  description: "Experienced Backend Developer with a demonstrated history of working in the information technology and services industry."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-backgroundLight dark:bg-backgroundDark">
        {children}
      </body>
    </html>
  );
}
