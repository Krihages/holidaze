"use client";

import { useState } from "react";
import DatePicker from "./DatePicker";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import LoginModal from "@/components/Modal/Login";
import { differenceInDays } from "date-fns";
import { VenueType } from "@/types/venue";
import { BookingProps } from "@/types/bookings";
import BookVenueAction from "@/api/actions/BookVenueAction";
import { Badge } from "./ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { UserGroup } from "./icons";
/* import ConfirmAction from "./ConfirmAction"; */

export default function Booking({ venue }: { venue: VenueType }) {
  const [date, setDate] = useState<DateRange | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [guests, setGuests] = useState(0);

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
    }
    if (result.success) {
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
        <div className="self-start flex flex-col gap-2 text-sm justify-end text-muted-foreground w-full ">
          <Guests
            guests={guests}
            setGuests={setGuests}
            maxGuests={venue.maxGuests}
          />
          {numNights(date) > 0 && guests > 0 ? (
            <div className="pb-2 flex justify-between mx-1 pt-1">
              <p>
                {venue.price} NOK x {numNights(date)} nights
              </p>
              <p className="font-semibold">= {TotalPrice.toFixed(0)} NOK</p>
            </div>
          ) : (
            <p className="pb-2">Select booking dates and number of guests</p>
          )}
          <Button
            onClick={onSubmit}
            disabled={numNights(date) === 0 || guests === 0}
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

type GuestsProps = {
  guests: number;
  setGuests: (guests: number) => void;
  maxGuests: number;
};
function Guests({ guests, setGuests, maxGuests }: GuestsProps) {
  /*   const [tempGuests, setTempGuests] = useState(guests); */
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="flex bg-background items-center gap-2 text-muted-foreground w-full border rounded-md py-2 px-4 cursor-pointer hover:bg-accent hover:text-foreground transition-colors duration-200 ease-out shadow-sm ">
          <UserGroup color={guests > 0 ? "default" : "muted"} />
          {guests > 0 ? (
            <span className="text-foreground">{guests} guest(s)</span>
          ) : (
            <span>Select guests</span>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] max-w-full px-6">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center gap-4 justify-between w-full">
            <p>Adults</p>
            <div className="flex items-center gap-2 ">
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
                disabled={adults + children >= maxGuests}
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between w-full">
            <p>Children</p>
            <div className="flex items-center gap-2 ">
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
                disabled={adults + children >= maxGuests || adults <= 0}
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
