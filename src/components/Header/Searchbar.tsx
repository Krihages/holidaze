"use client";

import { Input } from "@/components/ui/input";
import SearchIcon from "@/components/icons/SearchIcon";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Searchbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleSubmit() {
    if (search.length < 3) return;
    console.log(search);

    router.push(`/venues?query=${search}`);
  }
  return (
    <div className="bg-white w-full p-4 shadow-md">
      <div className="max-w-xl mx-auto relative cursor-pointer">
        <Input
          type="text"
          placeholder="Where do you want to go?"
          className="rounded-full px-8 py-2 shadow-sm"
          value={search}
          onChange={handleSearch}
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2"
          onClick={handleSubmit}
        >
          <SearchIcon size={20} color="muted" />
        </div>
      </div>
    </div>
  );
}
