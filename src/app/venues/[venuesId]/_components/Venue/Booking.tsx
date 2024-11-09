"use client";

import { VenueType } from "@/types/venue";
import BookingMobile from "@/components/Modal/BookingMobile";
import BookingDesktop from "@/components/Booking";

export default function Booking({ venue }: { venue: VenueType }) {
  /*   const isLoggedIn = checkUserLoggedIn(); */
  return (
    <div className="relative lg:min-h-screen ">
      <div className="hidden md:block lg:sticky lg:top-12  ">
        <BookingDesktop venue={venue} />
      </div>
      <div className="md:hidden">
        <BookingMobile venue={venue} />
      </div>
    </div>
  );
}
