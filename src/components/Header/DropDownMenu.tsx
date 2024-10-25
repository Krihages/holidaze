"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import { MenuItems } from "@/types/MenuItems";
/* import { Button } from "@/components/ui/button";
import logoutAction from "@/api/actions/LogoutAction"; */

export default function DropDownMenu({
  menuItems,
}: {
  menuItems: MenuItems[];
}) {
  if (menuItems.length === 0) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <HamburgerIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <MenuBuilder item={item} key={item.label} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MenuBuilder({ item }: { item: MenuItems }) {
  if (item?.type === "link") {
    return (
      <Link className="w-full cursor-pointer" href={item.href ?? "/"}>
        <DropdownMenuItem key={item.label}>{item.label}</DropdownMenuItem>
      </Link>
    );
  }
  if (item?.type === "button") {
    /*     if (item?.action === "logout") {
      return (
        <Button onClick={() => logoutAction()} variant="outline">
          <DropdownMenuItem>{item.label}</DropdownMenuItem>
        </Button>
      );
    } */
  }
}
