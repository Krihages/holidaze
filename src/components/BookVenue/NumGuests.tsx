"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserGroup } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GuestsProps = {
  guests: number;
  setGuests: (guests: number) => void;
  maxGuests?: number;
  className?: string;
  triggerText?: string;
};
export default function NumGuests({
  guests,
  setGuests,
  maxGuests,
  className,
  triggerText = "Select guests",
}: GuestsProps) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex bg-background items-center gap-2 text-muted-foreground w-full border rounded-md py-2 px-4 cursor-pointer hover:bg-accent hover:text-foreground transition-colors duration-200 ease-out shadow-sm ",
            className
          )}
        >
          <UserGroup color={guests > 0 ? "default" : "muted"} />
          {guests > 0 ? (
            <span className="text-foreground">
              {guests} {guests === 1 ? "guest" : "guests"}
            </span>
          ) : (
            <span>{triggerText}</span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] max-w-full px-6 pt-8 pb-6 rounded-md ">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center gap-4 justify-between w-full">
            <p>Adults</p>
            <div className="flex items-center w-20 justify-between">
              <Button
                variant="primary-light"
                className="w-6 h-6 p-0 rounded-full flex items-center justify-center"
                size="icon"
                onClick={() => setAdults(adults - 1)}
                disabled={adults <= 1}
              >
                -
              </Button>

              <span>{adults}</span>
              <Button
                variant="primary-light"
                className="w-6 h-6 p-0 rounded-full flex items-center justify-center"
                size="icon"
                onClick={() => setAdults(adults + 1)}
                disabled={maxGuests ? adults + children >= maxGuests : false}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between w-full">
            <p>Children</p>
            <div className="flex items-center w-20 justify-between">
              <Button
                variant="primary-light"
                className="w-6 h-6 p-0 rounded-full flex items-center justify-center"
                size="icon"
                onClick={() => setChildren(children - 1)}
                disabled={children <= 0}
              >
                -
              </Button>

              <span>{children}</span>
              <Button
                variant="primary-light"
                className="w-6 h-6 p-0 rounded-full flex items-center justify-center"
                size="icon"
                onClick={() => setChildren(children + 1)}
                disabled={maxGuests ? adults + children >= maxGuests : false}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <Button
              onClick={() => {
                setGuests(0);
                setAdults(0);
                setChildren(0);
              }}
              variant="outline"
            >
              Reset
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setGuests(adults + children);
                setIsOpen(false);
              }}
              disabled={adults + children === 0}
            >
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
