import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata: Metadata = {
  title: "Inventories",
  description: "Aplikasi manajemen inventaris yang efisien untuk melacak dan mengelola stok barang secara real-time, membantu bisnis meningkatkan produktivitas dan efisiensi operasional."
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
