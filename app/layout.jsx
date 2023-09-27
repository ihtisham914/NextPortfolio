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
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        ></link>
      </head>
      <body
        className={`${OpenSans.className} bg-black flex items-start justify-center text-white`}
      >
        {children}
      </body>
    </html>
  );
}
