import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata: Metadata = {
  title: "Multi Role Auth",
  description: "A Next.js starter with multi-role authentication.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
