"use client";

import { Booking } from "@/types/venue";
import BookingTable from "@/components/BookingTable/table";
import venueBookingsColumns from "@/components/BookingTable/columns/venueBookings";

export default function CustomerBookings({
  bookings,
}: {
  bookings: Booking[];
}) {
  const bookingData = bookings.map((booking) => ({
    id: booking.id,
    customer: booking?.customer?.name,
    dates: [booking.dateFrom, booking.dateTo],
    guests: booking.guests,
  }));
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold ">Customer bookings</h2>
      <BookingTable columns={venueBookingsColumns} data={bookingData} />
    </div>
  );
}
