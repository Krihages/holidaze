"use client";

import { useReducer } from "react";
import {
  State,
  Action,
  SearchParams,
  Price,
  Amenities,
  Query,
} from "@/types/filter";
import { useRouter } from "next/navigation";

export default function useSearchFilter(params?: SearchParams) {
  const initialState = getInitialState(params);
  const router = useRouter();
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    (state: State, action: Action) => {
      switch (action.type) {
        case "price":
          return { ...state, price: action.payload as Price };
        case "amenities":
          return {
            ...state,
            amenities: action.payload as Amenities,
          };
        case "guests":
          return { ...state, guests: action.payload as number };
        case "query":
          return { ...state, query: action.payload as Query };
        case "filter":
          const searchParams = new URLSearchParams();
          Object.entries(state).forEach(([key, value]) => {
            if (value !== initialState[key as keyof State]) {
              if (key === "amenities") {
                Object.entries(value).forEach(([amenity, value]) => {
                  if (value) searchParams.set(amenity, "true");
                });
              } else if (key === "price") {
                if (
                  (value as number[])[0] === 0 &&
                  (value as number[])[1] === 10000
                )
                  return;

                searchParams.set(key, (value as number[]).join("-"));
              } else searchParams.set(key, JSON.stringify(value));
            }
          });
          router.push(`?${searchParams.toString()}`);
          return state;
        default:
          return state;
      }
    },
    initialState as State
  );

  return { state, dispatch };
}

function getInitialState(params?: SearchParams): State {
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
    shouldApplyFilter: false,
  };
}
