import { VenueType } from "@/types/venue";

export default function getDefaultValues(
  venueData?: VenueType,
  images?: { url: string; alt?: string }[]
) {
  return {
    name: venueData?.name ?? "",
    description: venueData?.description ?? "",
    location: venueData?.location ?? "",
    media: images ?? [],
    meta: venueData?.meta ?? {},
    rating: venueData?.rating ?? 0,
    price: venueData?.price ?? 0,
  };
}
