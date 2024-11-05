"use client";

import { Button } from "@/components/ui/button";

type GuestsProps = {
  guests: number;
  setGuests: (value: number) => void;
  maxGuests: number;
};

export default function Guests({ guests, setGuests, maxGuests }: GuestsProps) {
  return (
    <div className="flex flex-col items-start gap-2 ">
      <p className="text-foreground flex flex-col items-start">
        Select number of guests
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="default"
          onClick={() => setGuests(guests - 1)}
          disabled={guests === 1}
          className="flex items-center justify-center border-muted-foreground rounded-full w-6 h-6 px-0 py-0"
        >
          -
        </Button>
        {guests}
        <Button
          variant="default"
          onClick={() => setGuests(guests + 1)}
          disabled={guests === maxGuests}
          className="flex items-center justify-center border-muted-foreground rounded-full w-6 h-6 px-0 py-0"
        >
          +
        </Button>
      </div>
    </div>
  );
}
