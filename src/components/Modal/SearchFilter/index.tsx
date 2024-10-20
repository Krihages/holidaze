"use client";

import Modal from "..";
import { PriceRange } from "./PriceRange";
import SearchInput from "./SearchInput";
import { useReducer, useEffect, useCallback } from "react";
import Amenities from "./Amenities";
import { State, Action, SearchParams } from "@/types/filter";
import GuestCount from "./GuestCount";
import { useRouter } from "next/navigation";
import FilterButton from "./FilterButton";

export default function SearchFilter({ params }: { params?: SearchParams }) {
  const initialState = getInitialState(params);
  const router = useRouter();

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "price":
        return { ...state, price: action.payload };
      case "amenities":
        return { ...state, amenities: action.payload };
      case "guestCount":
        return { ...state, guestCount: action.payload };
      case "query":
        return { ...state, query: action.payload };
      case "filter":
        return { ...state, shouldApplyFilter: true };
      case "reset":
        return { ...state, shouldApplyFilter: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  const applyFilter = useCallback(() => {
    const searchParams = new URLSearchParams();
    Object.entries(state).forEach(([key, value]) => {
      if (
        value !== initialState[key as keyof State] &&
        key !== "shouldApplyFilter"
      ) {
        if (key === "amenities") {
          Object.entries(value as Record<string, boolean>).forEach(
            ([amenity, isChecked]) => {
              if (isChecked) searchParams.set(amenity, "true");
            }
          );
        } else if (key === "price") {
          const [min, max] = value as [number, number];
          if (min !== 0 || max !== 10000) {
            searchParams.set(key, `${min}-${max}`);
          }
        } else if (key === "query") {
          if (value !== "") searchParams.set(key, value as string);
        } else {
          searchParams.set(key, value as string);
        }
      }
    });
    router.push(`?${searchParams.toString()}`);
  }, [state, initialState, router]);

  useEffect(() => {
    if (state.shouldApplyFilter) {
      applyFilter();
      dispatch({ type: "reset" });
    }
  }, [state.shouldApplyFilter, applyFilter]);

  return (
    <Modal
      triggerBtn="Open"
      headerText="Filter"
      triggerVariant="primary"
      description="Filter for search results"
    >
      <Modal.Main>
        <SearchInput dispatch={dispatch} query={state.query} />
        <PriceRange dispatch={dispatch} price={state.price} />
        <GuestCount state={state} dispatch={dispatch} />
        <Amenities state={state} dispatch={dispatch} />
      </Modal.Main>
      <Modal.Close className="max-w-40">
        <FilterButton dispatch={dispatch} state={state} />
      </Modal.Close>
    </Modal>
  );
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
