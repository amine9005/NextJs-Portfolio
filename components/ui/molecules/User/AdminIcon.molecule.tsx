import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/atoms/dropdown-menu/dropdown-menu";
import { User2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/atoms/button/button";
import { signOutAction } from "@/app/api/actions/auth/auth.controller";

export default function AdminIconMolecule() {
  const urls = [
    {
      label: "View Projects",
      href: "/admin/project",
    },
    {
      label: "Add Project",
      href: "/admin/project/add",
    },
    ,
    {
      label: "View Requests",
      href: "/admin/requests",
    },
    {
      label: "Edit Hero Text",
      href: "/admin/hero/text",
    },
    {
      label: "Edit Hero Media",
      href: "/admin/hero/media",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <User2Icon className="size-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          {urls.map((item, idx) => (
            <DropdownMenuItem key={idx}>
              <Link href={item!.href}>{item?.label}</Link>{" "}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem onClick={signOutAction}>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
