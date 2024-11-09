"use client";

import { VenueType } from "@/types/venue";
import BookingMobile from "@/components/Modal/BookingMobile";
import BookingDesktop from "@/components/BookVenue";
import IsLoggedIn from "@/types/isLoggedIn";

type BookingProps = {
  venue: VenueType;
  isLoggedIn: IsLoggedIn;
};

export default function Booking({ venue, isLoggedIn }: BookingProps) {
  return (
    <div className="relative lg:min-h-screen ">
      <div className="hidden md:block lg:sticky lg:top-12  ">
        <BookingDesktop venue={venue} isLoggedIn={isLoggedIn} />
      </div>
      <div className="md:hidden">
        <BookingMobile venue={venue} isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}
