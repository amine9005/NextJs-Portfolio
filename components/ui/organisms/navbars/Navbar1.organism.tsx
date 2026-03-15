"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/atoms/navigation-menu/navigation-menu";

import { buttonVariants } from "@/components/ui/atoms/button/button";
import Link from "next/link";
import MenuButtonMolecule from "@/components/ui/molecules/menu-button/MenuButton.molecule";
import { motion } from "motion/react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLogoQuery } from "@/hooks/queries/useLogoQuery.hook";
import LogoWithNameMolecule from "../../molecules/logo-with-name/LogoWithName.molecule";
import { useSettingsQuery } from "@/hooks/queries/useSettingsQuery.hook";
import AdminIconMolecule from "@/components/ui/molecules/User/AdminIcon.molecule";
import { useTheme } from "next-themes";
interface RouteProps {
  href: string;
  label: string;
}
const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/contact-me",
    label: "Contact",
  },
  {
    href: "/project",
    label: "Projects",
  },
];

const Navbar1Organism = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();
  const { data: logoData, isLoading } = useLogoQuery();
  const { data: settings } = useSettingsQuery();

  useLayoutEffect(() => {
    function getTheme() {
      if (settings) {
        // Set the value of a CSS variable:
        // Get the value of a CSS variable:
        const color = getComputedStyle(
          document.documentElement,
        ).getPropertyValue("--primary");

        console.log("settings: ", settings);
        console.log("color: ", color);
        document.documentElement.style.setProperty(
          "--primary",
          "oklch(57.401% 0.29236 45.044)",
        );
        const color2 = getComputedStyle(
          document.documentElement,
        ).getPropertyValue("--primary");
        console.log("color2: ", color2);

        document.documentElement.style.setProperty(
          "--secondary",
          settings.secondaryColor,
        );
        setTheme("default");
      }
    }
    getTheme();
  }, [settings, setTheme]);

  return (
    <header
      className={`sticky border-b top-0 z-50 w-full dark:border-b-slate-700 overflow-x-hidden
      bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 min-h-15`}
    >
      <NavigationMenu className="flex overflow-hidden flex-col items-center justify-center">
        <NavigationMenuList className=" px-8 w-screen min-h-14 flex justify-between md:grid md:grid-cols-3 ">
          <NavigationMenuItem className="font-bold ">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex col-span-1"
            >
              {" "}
              {!isLoading && (
                <LogoWithNameMolecule
                  imageUrl={logoData.imageUrl}
                  leftColor={logoData.leftColor}
                  rightColor={logoData.rightColor}
                  useImage={logoData.useImage}
                  name={logoData.fullName}
                />
              )}
            </Link>
          </NavigationMenuItem>

          <NavigationMenuList className="hidden md:flex gap-2 col-span-1">
            {routeList.map((route: RouteProps, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink asChild>
                  <Link
                    rel="noreferrer noopener"
                    href={route.href}
                    className={`text-[17px] ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    {route.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <MenuButtonMolecule isOpen={isOpen} setIsOpen={setIsOpen} />
          <AdminIconMolecule />
        </NavigationMenuList>

        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : "0px" }}
          transition={{ duration: 0.3 }}
        >
          <NavigationMenuList className="md:hidden flex flex-col justify-center items-center">
            {routeList.map((route: RouteProps, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink asChild>
                  <Link
                    onClick={() => setIsOpen(false)}
                    rel="noreferrer noopener"
                    href={route.href}
                    className={`text-[17px] ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    {route.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </motion.div>
      </NavigationMenu>
    </header>
  );
};

export default Navbar1Organism;
