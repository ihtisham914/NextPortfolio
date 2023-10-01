import "./globals.css";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "Ihitham Ul Haq",
  description: "Personal Portfolio Website",
};

export const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/newlogo.png" />
      </head>
      <body
        className={`${OpenSans.className} bg-black flex items-start justify-center text-white`}
      >
        {children}
      </body>
    </html>
  );
}
