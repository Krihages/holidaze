"use client";

import { VenueType } from "@/types/venue";
import BookingMobile from "@/components/Modal/BookingMobile";
import BookingDesktop from "@/components/Booking";

export default function Booking({ venue }: { venue: VenueType }) {
  return (
    <>
      <div className="hidden md:block">
        <BookingDesktop venue={venue} />
      </div>
      <div className="md:hidden">
        <BookingMobile venue={venue} />
      </div>
    </>
  );
}
