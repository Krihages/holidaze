"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { SearchIcon } from "@/components/icons";
import { Dispatch } from "react";
import { QueryAction, QueryState } from "@/types/filter";

export default function SearchInput({
  dispatch,
  query,
}: {
  dispatch: Dispatch<QueryAction>;
  query: QueryState["query"];
}) {
  return (
    <div className="relative">
      <Label className="text-sm text-muted-foreground" htmlFor="search">
        Search:
      </Label>
      <Input
        id="search"
        type="search"
        name="search"
        placeholder="Where are you going?"
        className="py-6 px-4"
        value={query}
        onChange={(e) =>
          dispatch({
            type: "query",
            payload: e.target.value,
          })
        }
      />
      <div className="absolute top-1/2  right-3">
        <SearchIcon color="muted" />
      </div>
    </div>
  );
}
