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
import ResetFilter from "./ResetFilter";
import getInitialState from "./getInitialState";

/**
 * A modal component that provides search filtering functionality
 *
 * @component
 * @param {Object} props - The component props
 * @param {SearchParams} [props.params] - Initial search parameters from URL query string
 * @returns {JSX.Element} A modal with search filters including price range, amenities, guest count and search input
 */
export default function SearchFilter({
  params,
}: {
  params?: SearchParams;
}): JSX.Element {
  const initialState = getInitialState(params);
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: "update" });
  }, [params]);

  /**
   * Reducer function to handle state updates for the search filters
   *
   * @param {State} state - Current state of the filters
   * @param {Action} action - Action object containing type and optional payload
   * @returns {State} New state after applying the action
   */
  const reducer = (state: State, action: Action): State => {
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
        return { ...getInitialState(), shouldApplyFilter: false };
      case "update":
        return { ...getInitialState(params), shouldApplyFilter: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  /**
   * Constructs and applies search parameters to the URL based on current filter state
   *
   * @function
   * @returns {void}
   */
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
    }
  }, [state.shouldApplyFilter, applyFilter]);

  return (
    <Modal
      triggerBtn="Filter"
      headerText="Filter"
      triggerVariant="outline"
      description="Filter for search results"
    >
      <Modal.Main>
        <SearchInput dispatch={dispatch} query={state.query} />
        <PriceRange dispatch={dispatch} price={state.price} />
        <GuestCount state={state} dispatch={dispatch} />
        <Amenities state={state} dispatch={dispatch} />
      </Modal.Main>
      <div className="flex  gap-4">
        <Modal.Close className="max-w-40">
          <FilterButton dispatch={dispatch} state={state} />
        </Modal.Close>
        <ResetFilter dispatch={dispatch} />
      </div>
    </Modal>
  );
}
