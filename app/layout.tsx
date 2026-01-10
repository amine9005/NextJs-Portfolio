import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "@/providers/TanStackProvider";
import Navbar1Organism from "@/components/ui/organisms/navbars/Navbar1.organism";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Name",
  description: "3D developer, Blender 3D developer animator and creator ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar1Organism />
      <html lang="en">
        <body className={`${inter.className} dark`}>
          <Toaster />
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </html>
    </>
  );
}
