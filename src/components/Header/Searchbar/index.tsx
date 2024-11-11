"use client";

import { useState, useEffect } from "react";
import Destination from "./Destination";
import Dates from "./Dates";
import { useRouter } from "next/navigation";
import { DateRange } from "react-day-picker";
import Guests from "./Guests";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import dateParse from "@/lib/helpers/dateParse";
import { useSearchParams } from "next/navigation";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const queryParam = searchParams.get("query");
  const guestCountParam = searchParams.get("guestCount");

  const [destination, setDestination] = useState(queryParam || "");
  const [date, setDate] = useState<DateRange | undefined>(
    dateParam ? dateParse(dateParam) : undefined
  );
  const [guests, setGuests] = useState(
    guestCountParam ? parseInt(guestCountParam) : 0
  );

  // Update the state only if the search params change to avoid unnecessary re-renders
  useEffect(() => {
    const dateParam = searchParams.get("date");
    const queryParam = searchParams.get("query");
    const guestCountParam = searchParams.get("guestCount");

    setDestination(queryParam || "");
    setDate(dateParam ? dateParse(dateParam) : undefined);
    setGuests(guestCountParam ? parseInt(guestCountParam) : 0);
  }, [searchParams]);

  function handleSearch() {
    const dateString =
      date?.from && date?.to
        ? `${format(date.from, "d.MM.yy")}-${format(date.to, "d.MM.yy")}`
        : "";
    const guestsString = guests > 1 ? guests.toString() : "";

    const url = `/venues?${destination !== "" ? `query=${destination}&` : ""}${
      dateString !== "" ? `date=${dateString}&` : ""
    }${guestsString !== "" ? `guestCount=${guestsString}` : ""}`;

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
        <Button className="rounded-full py-5 px-8" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}
