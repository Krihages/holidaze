"use client";

import { useState } from "react";
import DatePicker from "./DatePicker";
import { DateRange } from "react-day-picker";
import Guests from "@/app/venues/[venuesId]/_components/Venue/Guests";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/Modal/Login";
import { differenceInDays } from "date-fns";
import { VenueType } from "@/types/venue";
import { BookingProps } from "@/types/bookings";
import BookVenueAction from "@/api/actions/BookVenueAction";
import { Badge } from "./ui/badge";

export default function Booking({ venue }: { venue: VenueType }) {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [guests, setGuests] = useState(1);

  const bookings = venue.bookings.map((booking) => {
    return { from: new Date(booking.dateFrom), to: new Date(booking.dateTo) };
  });
  const numNights = (range: DateRange | undefined) =>
    range?.from && range?.to ? differenceInDays(range.to, range.from) : 0;

  const TotalPrice = numNights(date) * venue.price;

  async function onSubmit() {
    const props: BookingProps = {
      dateFrom: date?.from,
      dateTo: date?.to,
      venueId: venue.id,
      guests: Number(guests),
    };
    const result = await BookVenueAction(props);

    if (result === "login") {
      setIsOpen(true);
      return;
    } else if (result.success) {
    }
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
          <Badge>{venue.maxGuests} guests</Badge>
        </div>
        <DatePicker
          price={venue.price}
          date={date}
          setDate={setDate}
          disabledDates={bookings}
        />
        <div className="self-start flex flex-col gap-2 text-sm justify-end text-center text-muted-foreground w-full ">
          {numNights(date) > 0 ? (
            <>
              <Guests
                guests={guests}
                setGuests={setGuests}
                maxGuests={venue.maxGuests}
              />

              <p className="text-foreground flex flex-col items-start">
                ({numNights(date)} Nights) Total:
                <span className="font-semibold">
                  {" "}
                  {TotalPrice.toFixed(0)} NOK
                </span>
              </p>
            </>
          ) : (
            <p className="">Select dates from Calendar</p>
          )}
          <Button
            onClick={onSubmit}
            disabled={numNights(date) === 0}
            className="justify-self-end"
          >
            Book now
          </Button>
        </div>
        {isOpen && (
          <LoginModal
            variant="controlled"
            open={isOpen}
            isOpen={(newState: boolean) => setIsOpen(newState)}
          />
        )}
      </div>
    </div>
  );
}
