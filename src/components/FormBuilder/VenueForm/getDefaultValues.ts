import { VenueType } from "@/types/venue";

export default function getDefaultValues(
  venueData?: VenueType,
  images?: { url: string; alt?: string }[]
) {
  return {
    name: venueData?.name ?? "",
    description: venueData?.description ?? "",
    address: venueData?.location?.address ?? "",
    city: venueData?.location?.city ?? "",
    zip: venueData?.location?.zip ?? "",
    country: venueData?.location?.country ?? "",
    media: images ?? [],
    wifi: venueData?.meta?.wifi ?? false,
    parking: venueData?.meta?.parking ?? false,
    pets: venueData?.meta?.pets ?? false,
    breakfast: venueData?.meta?.breakfast ?? false,
    rating: venueData?.rating ?? 0,
    price: venueData?.price ?? 0,
    maxGuests: venueData?.maxGuests ?? 1,
  };
}
