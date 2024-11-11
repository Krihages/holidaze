"use client";

import { Button } from "@/components/ui/button";
import { GuestCountState, GuestCountAction } from "@/types/filter";
import { Dispatch } from "react";

export default function GuestCount({
  state,
  dispatch,
}: {
  state: GuestCountState;
  dispatch: Dispatch<GuestCountAction>;
}) {
  const handleChange = (type: "increment" | "decrement") => {
    dispatch({
      type: "guests",
      payload:
        type === "increment" ? state.guestCount + 1 : state.guestCount - 1,
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">Number of guests</p>
      <div className="flex items-center w-32 justify-between">
        <Button
          variant="ghost"
          className="w-8 h-8  rounded-full border border-muted-foreground shadow-lg"
          onClick={() => handleChange("decrement")}
          disabled={state.guestCount === 1}
        >
          -
        </Button>
        <p className="">{state.guestCount}</p>
        <Button
          variant="ghost"
          className="w-8 h-8  rounded-full border border-muted-foreground shadow-lg"
          onClick={() => handleChange("increment")}
        >
          +
        </Button>
      </div>
    </div>
  );
}
