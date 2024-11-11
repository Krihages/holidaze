import { State, Action } from "@/types/filter";
import getInitialState from "./getInitialState";

export default function filterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "price":
      return { ...state, price: action.payload };
    case "amenities":
      return { ...state, amenities: action.payload };
    case "guests":
      return { ...state, guestCount: action.payload };
    case "query":
      return { ...state, query: action.payload };
    case "filter":
      return { ...state, shouldApplyFilter: true };
    case "reset":
      return { ...getInitialState() };
    case "update":
      return { ...state, shouldApplyFilter: false };
    case "date":
      return { ...state, date: action.payload };
    default:
      return state;
  }
}
