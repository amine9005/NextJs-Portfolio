"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/atoms/navigation-menu/navigation-menu";

import { buttonVariants } from "@/components/ui/atoms/button/button";
import Link from "next/link";
import MenuButtonMolecule from "../../molecules/menu-button/MenuButton.molecule";
import { useState } from "react";
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

  return (
    <header
      className={`sticky border-b top-0 z-50 w-full dark:border-b-slate-700 overflow-x-hidden
      bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 min-h-15`}
    >
      <NavigationMenu className="flex transition-transform duration-300 flex-col items-center justify-center">
        <NavigationMenuList className="container w-screen px-8 min-h-14 flex justify-between ">
          <NavigationMenuItem className="font-bold ">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <span className="uppercase bg-linear-to-r from-[#667EEA] to-[#764BA2] text-transparent bg-clip-text">
                Full Name
              </span>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuList className="hidden md:flex gap-2">
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
          <div></div>
          <MenuButtonMolecule isOpen={isOpen} setIsOpen={setIsOpen} />
        </NavigationMenuList>

        {isOpen && (
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
        )}
      </NavigationMenu>
    </header>
  );
};

export default Navbar1Organism;
