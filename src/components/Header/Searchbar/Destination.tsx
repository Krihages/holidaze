"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Destination({
  destination,
  setDestination,
}: {
  destination: string;
  setDestination: (destination: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="w-[300px] border border-gray-400 rounded-full text-muted-foreground py-5 px-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            {destination !== "" ? (
              <div className="flex gap-2 items-center ">
                <span className="text-sm text-muted-foreground ">Query:</span>
                <span className="text-foreground ">{destination}</span>
              </div>
            ) : (
              "Where to?"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] max-w-full px-6 pt-8 pb-6 rounded-md ">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground font-semibold">
              Destination:
            </p>
            <Input
              type="text"
              placeholder="City, region, country etc.."
              className=""
              value={destination}
              maxLength={16}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
