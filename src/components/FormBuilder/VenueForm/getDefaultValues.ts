import { VenueType } from "@/types/venue";

export default function getDefaultValues(venueData?: VenueType) {
  return {
    name: venueData?.name ?? "",
    description: venueData?.description ?? "",
    location: venueData?.location ?? "",
    media: venueData?.media ?? [],
    meta: venueData?.meta ?? {},
    rating: venueData?.rating ?? 0,
    price: venueData?.price ?? 0,
  };
}
