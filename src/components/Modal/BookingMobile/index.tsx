import Modal from "@/components/Modal";
import { VenueType } from "@/types/venue";

import BookingDetails from "@/components/Booking";

export default function BookingMobile({ venue }: { venue: VenueType }) {
  function TriggerBtn() {
    return (
      <>
        <p className="text-xl font-semibold">Check availability</p>
        <p>
          {venue.price} NOK /{" "}
          <span className="text-muted-foreground">night</span>
        </p>
      </>
    );
  }

  return (
    <Modal
      triggerBtn={<TriggerBtn />}
      className={{
        trigger:
          "w-full left-0 fixed bottom-0 z-10 bg-white py-10 h-28 border-t border-gray-300 shadow-lg flex flex-col justify-center items-center",
      }}
      headerText="Booking"
    >
      <Modal.Main className="pb-10 h-screen flex flex-col justify-center">
        <div className=" ">
          <BookingDetails venue={venue} />
        </div>
      </Modal.Main>
    </Modal>
  );
}
