import { SearchParams } from "@/types/filter";
import { VenueType } from "@/types/venue";
import parseDate from "@/lib/helpers/dateParse";

/**
 * Filters a list of venues based on search parameters
 * @param {VenueType[]} venues - Array of venue objects to filter
 * @param {SearchParams} filters - Search parameters to filter venues by:
 * @param {string} [filters.price] - Price range in format "min-max"
 * @param {boolean} [filters.wifi] - Filter venues with wifi
 * @param {boolean} [filters.pet] - Filter venues that allow pets
 * @param {boolean} [filters.breakfast] - Filter venues that offer breakfast
 * @param {boolean} [filters.parking] - Filter venues with parking
 * @param {string} [filters.query] - Search query to filter venue name, description, city or country
 * @param {number} [filters.guestCount] - Minimum number of guests the venue must accommodate
 * @param {string} [filters.date] - Date range in format "dd.MM.yy-dd.MM.yy" to check venue availability
 * @returns {VenueType[]} Filtered array of venues matching all the search criteria
 * @example
 * const filteredVenues = filterVenuesList(venues, {
 *   price: "100-200",
 *   wifi: true,
 *   guestCount: 2,
 *   date: "01.01.24-05.01.24"
 * })
 */
export default function filterVenuesList(
  venues: VenueType[],
  filters: SearchParams
) {
  const { wifi, pet, breakfast, parking, price, query, guestCount, date } =
    filters;

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
  if (date) {
    const parsedDate = parseDate(date);
    filteredVenues = filteredVenues.filter((venue) => {
      if (!venue.bookings || venue.bookings.length === 0) return true;
      return !venue.bookings.some((booking) => {
        const bookingFrom = new Date(booking.dateFrom);
        const bookingTo = new Date(booking.dateTo);
        return (
          (parsedDate.from >= bookingFrom && parsedDate.from <= bookingTo) ||
          (parsedDate.to >= bookingFrom && parsedDate.to <= bookingTo) ||
          (parsedDate.from <= bookingFrom && parsedDate.to >= bookingTo)
        );
      });
    });
  }

  return filteredVenues;
}
