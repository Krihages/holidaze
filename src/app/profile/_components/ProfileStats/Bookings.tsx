import VenueCard from "@/components/VenueCard";
import { Booking } from "@/types/profile";

export default function Bookings({ bookings }: { bookings?: Booking[] }) {
  console.log(bookings);
  return <div>Bookings</div>;
}
