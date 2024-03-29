import type { Metadata } from "next";
import { Archivo_Black, Ubuntu } from "next/font/google";
import "./globals.css";

// Custom Google Font import
const archivo_black_init = Archivo_Black({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-archivo_black',
  });

const ubuntu_init = Ubuntu({
  subsets: ["latin"],
  weight: ['300','700'],
  variable: '--font-ubuntu',
  });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo_black_init.variable} ${ubuntu_init.variable}`}>{children}</body>
    </html>
  );
}
