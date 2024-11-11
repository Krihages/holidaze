"use client";

import Modal from "..";
import { PriceRange } from "./PriceRange";
import SearchInput from "./SearchInput";
import { useReducer, useEffect, useTransition, useState } from "react";
import Amenities from "./Amenities";
import { State, Action, SearchParams } from "@/types/filter";
import GuestCount from "./GuestCount";
import { useRouter } from "next/navigation";
import FilterButton from "./FilterButton";
import ResetFilter from "./ResetFilter";
import getInitialState from "./getInitialState";
import reducer from "./Reducer";
import { DateRange } from "react-day-picker";
import SelectDates from "./SelectDates";
import { format } from "date-fns";
/**
 * SearchFilter component that provides filtering functionality for search results (based on URL search params)
 * @param {Object} props - Component props
 * @param {SearchParams} [props.params] - Optional search parameters to initialize the filter state
 * @returns {JSX.Element} The rendered SearchFilter component
 *
 */
export default function SearchFilter({
  params,
}: {
  params?: SearchParams;
}): JSX.Element {
  const initialState = getInitialState(params);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );

  function applyFilter() {
    const searchParams = new URLSearchParams();
    Object.entries(state.amenities).forEach(([amenity, isChecked]) => {
      if (isChecked) searchParams.set(amenity, "true");
    });
    const [min, max] = state.price;
    if (state.query) {
      searchParams.set("query", state.query);
    }
    if (min !== 0 || max !== 10000) {
      searchParams.set("price", `${min}-${max}`);
    }
    if (state.guestCount > 1) {
      searchParams.set("guestCount", state.guestCount.toString());
    }
    if (state.date?.from && state.date?.to) {
      searchParams.set(
        "date",
        `${format(state.date.from, "dd.MM.yy")}-${format(
          state.date.to,
          "dd.MM.yy"
        )}`
      );
    }
    router.push(`?${searchParams.toString()}`);
  }

  useEffect(() => {
    if (state.shouldApplyFilter) {
      startTransition(() => {
        applyFilter();
        dispatch({ type: "update" });
      });
    }
  }, [state.shouldApplyFilter, applyFilter]);

  return (
    <Modal
      triggerBtn="Filter"
      headerText="Filter"
      triggerVariant="outline"
      description="Filter for search results"
      loading={isPending}
      loadingText="Filtering..."
    >
      <Modal.Main>
        <SearchInput query={state.query} dispatch={dispatch} />
        <SelectDates date={state.date} dispatch={dispatch} />
        <PriceRange price={state.price} dispatch={dispatch} />
        <GuestCount state={state} dispatch={dispatch} />
        <Amenities state={state} dispatch={dispatch} />
      </Modal.Main>
      <div className="flex gap-4">
        <Modal.Close className="max-w-40">
          <FilterButton
            dispatch={dispatch}
            state={state}
            loading={isPending as boolean}
          />
        </Modal.Close>
        <ResetFilter dispatch={dispatch} />
      </div>
    </Modal>
  );
}
