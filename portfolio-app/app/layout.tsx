import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar2 from "@/components/navbar/Navbar2";
import ThemeProvider from './theme/ThemeProvider';



const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar2 />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
