"use client";

import { useState } from "react";
import Destination from "./Destination";
import Dates from "./Dates";
import { useRouter } from "next/navigation";
import { DateRange } from "react-day-picker";
import Guests from "./Guests";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export default function Searchbar() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [guests, setGuests] = useState(0);

  function handleSearch() {
    if (destination === "" && date === undefined && guests === 0) return;

    const dateString =
      date?.from && date?.to
        ? `${format(date.from, "d.MM.yy")}-${format(date.to, "d.MM.yy")}`
        : "";
    const guestsString = guests !== 0 ? guests.toString() : "";

    const url = `/venues?${destination !== "" ? `query=${destination}&` : ""}${
      dateString !== "" ? `date=${dateString}&` : ""
    }${guestsString !== "" ? `guestCount=${guestsString}` : ""}`;

    setDestination("");
    setDate(undefined);
    setGuests(0);

    router.push(url);
  }

  return (
    <div className="bg-background w-full p-4 shadow-md max-w-full max-lg:hidden relative z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Destination
          destination={destination}
          setDestination={setDestination}
        />
        <Dates dates={date} setDates={setDate} />
        <Guests guests={guests} setGuests={setGuests} />
        <Button
          className="rounded-full py-5 px-8"
          onClick={handleSearch}
          disabled={destination === "" && date === undefined && guests === 0}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
