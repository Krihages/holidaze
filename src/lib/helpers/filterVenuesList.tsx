import { SearchParams } from "@/types/filter";
import { VenueType } from "@/types/venue";

/**
 * Filters a list of venues based on search parameters
 * @param {VenueType[]} venues - Array of venue objects to filter
 * @param {SearchParams} filters - Search parameters to filter venues by
 * @returns {VenueType[]} Filtered array of venues matching the search criteria
 * @example
 * const filteredVenues = filterVenuesList(venues, {
 *   price: "100-200",
 *   wifi: true,
 *   guestCount: 2
 * })
 */
export default function filterVenuesList(
  venues: VenueType[],
  filters: SearchParams
) {
  const { wifi, pet, breakfast, parking, price, query, guestCount } = filters;

  let filteredVenues = venues;
  if (typeof price === "string") {
    const priceRange = price.split("-");
    const minPrice = Number(priceRange[0]);
    const maxPrice = Number(priceRange[1]);
    filteredVenues = filteredVenues.filter((venue) => {
      return venue.price >= minPrice && venue.price <= maxPrice;
    });
  }

  if (pet) {
    filteredVenues = filteredVenues.filter((venue) => {
      return venue.meta?.pets;
    });
  }

  if (wifi) {
    filteredVenues = filteredVenues.filter((venue) => {
      return venue.meta?.wifi;
    });
  }

  if (breakfast) {
    filteredVenues = filteredVenues.filter((venue) => {
      return venue.meta?.breakfast;
    });
  }

  if (parking) {
    filteredVenues = filteredVenues.filter((venue) => {
      return venue.meta?.parking;
    });
  }

  if (query) {
    const decodedQuery = decodeURIComponent(query).toLowerCase();
    filteredVenues = filteredVenues.filter((venue) => {
      return (
        (venue.location.city &&
          venue.location.city.toLowerCase().includes(decodedQuery)) ||
        (venue.location.country &&
          venue.location.country.toLowerCase().includes(decodedQuery)) ||
        (venue.name && venue.name.toLowerCase().includes(decodedQuery)) ||
        (venue.description &&
          venue.description.toLowerCase().includes(decodedQuery))
      );
    });
  }

  if (guestCount) {
    filteredVenues = filteredVenues.filter((venue) => {
      return venue.maxGuests >= guestCount;
    });
  }

  return filteredVenues;
}
