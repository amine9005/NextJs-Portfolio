import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanStackProvider from "@/providers/TanStackProvider";
import Navbar1Organism from "@/components/ui/organisms/navbars/Navbar1.organism";
import Footer1Organism from "@/components/ui/organisms/footers/Footer1.organism";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { CSSProperties } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Name",
  description: "3D developer, Blender 3D developer animator and creator ",
};

interface CustomCSS extends CSSProperties {
  "--primary": string;
  "--secondary": string;
  "--circle-color": string;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fetchSettings = async () => {
    const response = await axios.get(
      process.env.BETTER_AUTH_URL + "/api/admin/settings",
    );
    return response.data.settings;
  };

  const settings = await fetchSettings();

  const customStyle: CustomCSS = {
    "--primary": settings.primaryColor,
    "--secondary": settings.secondaryColor,
    "--circle-color": settings.circleColor,
  };

  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <TanStackProvider>
          <Navbar1Organism />
          <html lang="en">
            <body className={`${inter.className} dark`} style={customStyle}>
              <Toaster />
              {children}
            </body>
          </html>
          <Footer1Organism />
        </TanStackProvider>
      </SkeletonTheme>
    </>
  );
}
