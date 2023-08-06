import "./globals.css";

export const metadata = {
  title: "Ihitham Ul Haq",
  description: "Personal Website",
};

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
      <body className="bg-black flex items-start justify-center text-white">
        {children}
      </body>
    </html>
  );
}
