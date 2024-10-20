import { VenueType } from "@/types/venue";

export default function VenuePrice({ price }: { price: VenueType["price"] }) {
  return <p>{price}</p>;
}
