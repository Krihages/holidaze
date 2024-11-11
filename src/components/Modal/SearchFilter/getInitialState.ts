import dateParse from "@/lib/helpers/dateParse";
import { SearchParams, State } from "@/types/filter";

/**
 * Creates initial state object for search filters
 * if params are provided, it will use the values from the params to set the initial state
 * if no params are provided, it will use the default values
 * @function
 * @param {SearchParams} [params] - URL search parameters
 * @returns {State} Initial state object with default values or values from URL parameters
 */
export default function getInitialState(params?: SearchParams): State {
  return {
    price: params?.price
      ? ((params.price as string).split("-").map(Number) as [number, number])
      : [0, 10000],
    amenities: {
      wifi: params?.wifi ? true : false,
      parking: params?.parking ? true : false,
      breakfast: params?.breakfast ? true : false,
      pet: params?.pet ? true : false,
    },
    guestCount: params?.guestCount ? Number(params.guestCount) : 1,
    query: params?.query ?? "",
    date: params?.date ? dateParse(params.date) : undefined,
    shouldApplyFilter: false,
  };
}
