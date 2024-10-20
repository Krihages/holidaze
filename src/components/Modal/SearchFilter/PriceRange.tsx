"use client";

import { Slider } from "@/components/ui/slider";
import { Dispatch, useState } from "react";
import { Price, PriceAction } from "@/types/filter";
type PriceRangeProps = {
  dispatch: Dispatch<PriceAction>;
  price: Price;
};

/* 
Price range slider.
 - 2 slider knots: one for min price and one for max price
*/
export function PriceRange({ dispatch, price }: PriceRangeProps) {
  const [value, setValue] = useState(price);

  return (
    <div className="flex flex-col gap-2  text-sm">
      <div>
        <p className="  flex justify-between text-muted-foreground">
          Price range{" "}
          <span className="text-muted-foreground font-normal">
            (NOK / night)
          </span>
        </p>
      </div>
      <Slider
        defaultValue={value}
        max={10000}
        step={1}
        value={value}
        onValueChange={(newValue: [number, number]) => {
          setValue(newValue);
          dispatch({
            type: "price",
            payload: newValue,
          });
        }}
        className="w-full"
      />
      <div className="flex justify-between">
        <p>{value[0]} NOK</p>
        <p>{value[1]} NOK</p>
      </div>
    </div>
  );
}
