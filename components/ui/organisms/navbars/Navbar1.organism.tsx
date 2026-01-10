"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/atoms/navigation-menu/navigation-menu";

import { buttonVariants } from "@/components/ui/atoms/button/button";
import Link from "next/link";
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
  return (
    <header
      className="sticky border-b top-0 z-50 w-full  dark:border-b-slate-700 overflow-x-hidden
      bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 h-15 max-h-15
    "
    >
      <NavigationMenu>
        <NavigationMenuList className="container w-screen px-8 min-h-14 flex justify-between ">
          <NavigationMenuItem className="font-bold md:flex hidden">
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

          <NavigationMenuList className="md:flex gap-2">
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
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navbar1Organism;
