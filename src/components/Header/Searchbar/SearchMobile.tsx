"use client";
import { SearchIcon } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Searchbar from "./index";

import { useState } from "react";

export default function SearchMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden flex items-center">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <SearchIcon color="reverse" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-0">
          <Searchbar closeMenu={() => setOpen(false)} />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
