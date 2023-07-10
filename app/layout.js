import "./globals.css";

export const metadata = {
  title: "Ihitham Ul Haq",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black flex items-start justify-center text-white">
        {children}
      </body>
    </html>
  );
}
