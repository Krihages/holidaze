import { DateRange } from "react-day-picker";

export type Query = string;

export type QueryAction = {
  type: "query";
  payload: Query;
};

export type QueryState = {
  query: Query;
};

export type Price = [number, number];

export type PriceState = {
  price: Price;
};

export type PriceAction = {
  type: "price";
  payload: Price;
};

export type Amenities = {
  wifi: boolean;
  parking: boolean;
  breakfast: boolean;
  pet: boolean;
};
type AmenitiesPayload = Amenities;
export type AmenitiesAction = {
  type: "amenities";
  payload: AmenitiesPayload;
};
export type AmenitiesState = {
  amenities: Amenities;
};

type GuestCount = number;
export type GuestCountState = {
  guestCount: GuestCount;
};

export type GuestCountAction = {
  type: "guests";
  payload: GuestCount;
};

export type FilterPayload = State;

export type FilterAction = {
  type: "filter";
  payload: FilterPayload;
};

export type ResetAction = {
  type: "reset";
};

export type ShouldApplyFilterAction = {
  type: "shouldApplyFilter";
  payload: boolean;
};

export type ParamsAction = {
  type: "update";
};

export type SearchParams = {
  price?: Price | string;
  wifi?: boolean;
  parking?: boolean;
  breakfast?: boolean;
  pet?: boolean;
  guestCount?: GuestCount;
  query?: Query;
  date?: string;
};

export type State = {
  price: Price;
  amenities: Amenities;
  guestCount: GuestCount;
  query: Query;
  shouldApplyFilter: boolean;
  date?: DateRange | undefined;
};

export type DateAction = {
  type: "date";
  payload: DateRange | undefined;
};

export type Action =
  | PriceAction
  | AmenitiesAction
  | GuestCountAction
  | QueryAction
  | FilterAction
  | ResetAction
  | ParamsAction
  | DateAction;
