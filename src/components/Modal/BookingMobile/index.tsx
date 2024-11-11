"use client";

import Modal from "@/components/Modal";
import { VenueType } from "@/types/venue";
import BookingDetails from "@/components/BookVenue";
import IsLoggedIn from "@/types/isLoggedIn";
import { ChevronUp } from "@/components/icons";
import { useState } from "react";

export default function BookingMobile({
  venue,
  isLoggedIn,
}: {
  venue: VenueType;
  isLoggedIn: IsLoggedIn;
}) {
  const [bookingModal, setBookingModal] = useState(false);

  function TriggerBtn() {
    return (
      <>
        <ChevronUp size={28} />
        <div className="text-xl font-semibold">Check availability</div>
        <div>
          {venue.price} NOK /{" "}
          <span className="text-muted-foreground">night</span>
        </div>
      </>
    );
  }

  return (
    <Modal
      open={bookingModal}
      isOpen={setBookingModal}
      triggerBtn={<TriggerBtn />}
      className={{
        trigger:
          "w-full left-0 fixed bottom-0 z-10 bg-white py-10 h-28 border-t bg-info border-gray-300 shadow-lg flex flex-col justify-center items-center",
      }}
      variant="controlled"
      headerText="Booking"
    >
      <Modal.Main className="pb-10 h-screen flex flex-col justify-center">
        <div className=" ">
          <BookingDetails
            venue={venue}
            isLoggedIn={isLoggedIn}
            bookingModalClose={() => setBookingModal(false)}
            offset={-300}
          />
        </div>
      </Modal.Main>
    </Modal>
  );
}
