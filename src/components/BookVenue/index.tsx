"use client";

import { useState } from "react";
import DatePicker from "@/components/DatePicker";
import { DateRange } from "react-day-picker";
import { differenceInDays } from "date-fns";
import { VenueType } from "@/types/venue";
import { Badge } from "@/components/ui/badge";
import NumGuests from "./NumGuests";
import ConfirmBooking from "./ConfirmBooking";
import HoverMessage from "@/components/HoverMessage";
import IsLoggedIn from "@/types/isLoggedIn";

type BookingProps = {
  venue: VenueType;
  isLoggedIn: IsLoggedIn;
  bookingModalClose?: () => void | undefined;
  offset?: number;
};

export default function BookVenue({
  venue,
  isLoggedIn,
  bookingModalClose,
  offset = 5,
}: BookingProps) {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [guests, setGuests] = useState(0);

  const bookings = venue.bookings.map((booking) => {
    return { from: new Date(booking.dateFrom), to: new Date(booking.dateTo) };
  });
  const numNights = (range: DateRange | undefined) =>
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;

  const numberNights = numNights(date);

  const TotalPrice = numberNights * venue.price;

  function resetData() {
    setDate(undefined);
    setGuests(0);
  }

  return (
    <div>
      <div className="flex flex-col gap-4 max-w-[300px] mx-auto md:mx-0 ">
        <h2 className="text-lg font-semibold">Check availability:</h2>
        <div className="flex justify-between gap-2 flex-wrap mt-4">
          <p>
            <span className="font-semibold text-sm">{venue.price} NOK</span> /{" "}
            <span>night</span>
          </p>
          <HoverMessage
            message={`This venue can host a maximum of ${venue.maxGuests} guest(s)`}
          >
            <Badge>{venue.maxGuests} guests</Badge>
          </HoverMessage>
        </div>
        <DatePicker
          price={venue.price}
          date={date}
          setDate={setDate}
          disabledDates={bookings}
          offset={offset}
        />
        <div className="self-start flex flex-col gap-2 text-sm justify-end text-muted-foreground w-full ">
          <NumGuests
            guests={guests}
            setGuests={setGuests}
            maxGuests={venue.maxGuests}
          />
          {numberNights > 0 && guests > 0 ? (
            <div className="pb-2 flex justify-between mx-1 pt-1">
              <p>
                {venue.price} NOK x {numberNights} nights
              </p>
              <p className="font-semibold">= {TotalPrice.toFixed(0)} NOK</p>
            </div>
          ) : (
            <p className="pb-2">Select booking dates and number of guests</p>
          )}
          <ConfirmBooking
            venue={venue}
            numNights={numberNights}
            guests={guests}
            disabled={numberNights === 0 || guests === 0}
            dates={date}
            isLoggedIn={isLoggedIn}
            resetData={resetData}
            bookingModalClose={bookingModalClose}
          />
        </div>
      </div>
    </div>
  );
}
