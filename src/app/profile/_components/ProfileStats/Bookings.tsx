import DataTable from "@/components/BookingTable/table";
import bookingColumns from "@/components/BookingTable/columns/userBookings";

import { Booking } from "@/types/profile";

type BookingsProps = {
  bookings?: Booking[];
};

export default function Bookings({ bookings }: BookingsProps) {
  if (!bookings) return null;

  const bookingData = [
    ...bookings.map((booking) => ({
      id: booking.id,
      venue: booking.venue.name,
      dates: [booking.dateFrom, booking.dateTo],
    })),
  ].sort((a, b) => {
    const dateA = new Date(a.dates[1]);
    const dateB = new Date(b.dates[1]);
    return dateA.getTime() - dateB.getTime();
  });

  return <DataTable columns={bookingColumns} data={bookingData} />;
}
