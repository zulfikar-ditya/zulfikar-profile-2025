import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zulfikar Ditya - Backend Developer",
  description: "Experienced Backend Developer with a demonstrated history of working in the information technology and services industry.",
  keywords: "backend developer, backend engineer, software engineer, software developer, web developer, web engineer, fullstack developer, fullstack engineer, backend, backend development, backend programming, backend software engineer, backend software developer, backend web developer, backend web engineer, backend fullstack developer, backend fullstack engineer, backend software development, backend web development, backend fullstack development, backend software programming, backend web programming, backend fullstack programming, backend software development engineer, backend web development engineer, backend fullstack development engineer, backend software development developer, backend web development developer, backend fullstack development developer, backend software development programming, backend web development programming, backend fullstack development programming, Zulfikar Ditya, Zulfikar, Ditya",
  authors: {
    name: "Zulfikar Ditya",
    url: "https://github.com/zulfikar4568"
  },
  themeColor: "#14b8a6",
  applicationName: "Zulfikar Ditya",
  category: "Software Development",
  robots: "index, follow",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <meta content="SjlrZnBfF0NOO11lm4GExHQRf9UM87k4de9teOQxKKc" name="google-site-verification"></meta>
      <body className="bg-backgroundLight dark:bg-backgroundDark">
        {children}
      </body>
    </html>
  );
}
