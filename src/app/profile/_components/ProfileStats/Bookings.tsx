import { BookingTable } from "@/components/BookingTable";
import VenueCard from "@/components/VenueCard";
import { Booking } from "@/types/profile";

export default function Bookings({ bookings }: { bookings?: Booking[] }) {
  console.log(bookings);
  if (!bookings) return null;

  return <BookingTable bookings={bookings} />;
}
