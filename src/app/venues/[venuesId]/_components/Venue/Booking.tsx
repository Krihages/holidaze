"use client";

import DatePicker from "@/components/DatePicker";
import { VenueType } from "@/types/venue";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { differenceInDays } from "date-fns";
export default function Booking({ venue }: { venue: VenueType }) {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const bookings = venue.bookings.map((booking) => {
    return { from: new Date(booking.dateFrom), to: new Date(booking.dateTo) };
  });
  const numNights = (range: DateRange | undefined) =>
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;

  const TotalPrice = numNights(date) * venue.price;

  function onSubmit() {}

  return (
    <div className="flex flex-col my-6 gap-4 max-w-[300px]">
      <h2 className="text-lg font-semibold">Booking</h2>
      <DatePicker
        price={venue.price}
        date={date}
        setDate={setDate}
        disabledDates={bookings}
      />

      <div className="flex flex-col gap-2 text-sm  justify-end text-center text-muted-foreground">
        {numNights(date) > 0 ? (
          <p>
            ({numNights(date)} Nights) Total:
            <span className="font-semibold"> {TotalPrice.toFixed(0)} NOK</span>
          </p>
        ) : (
          <p className="">Select dates from Calendar</p>
        )}
        <Button disabled={numNights(date) === 0} className="justify-self-end">
          Book now
        </Button>
      </div>
    </div>
  );
}
