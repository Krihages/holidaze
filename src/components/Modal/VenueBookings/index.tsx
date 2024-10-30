import Modal from "../";
import { VenueType } from "@/types/venue";
import BookingTable from "@/components/BookingTable/table";
import venueBookingsColumns from "@/components/BookingTable/columns/venueBookings";

export default function VenueBookings({ venue }: { venue: VenueType }) {
  const bookings = venue.bookings;
  console.log(bookings);

  const bookingData = bookings.map((booking) => ({
    id: booking.id,
    customer: booking?.customer?.name,
    dates: [booking.dateFrom, booking.dateTo],
    guests: booking.guests,
  }));
  return (
    <Modal
      triggerVariant="outline"
      triggerBtn={`Venue bookings (${bookings?.length ?? 0})`}
      headerText={`bookings for: ${venue.name}`}
      triggerDisabled={bookings?.length === 0}
    >
      <Modal.Main className="min-h-[320px]">
        <BookingTable columns={venueBookingsColumns} data={bookingData} />
      </Modal.Main>
    </Modal>
  );
}
