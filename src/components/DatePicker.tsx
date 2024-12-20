"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, startOfDay } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { dateSelectHandler } from "@/lib/helpers";
import { datePickerProps } from "@/types/datePicker";
import useDatePicker from "@/hooks/useDatePicker";

/**
 * A date picker component that allows users to select date ranges with disabled dates support
 * @param {Object} props - The component props
 * @param {string} [props.className] - Additional CSS classes to apply to the wrapper
 * @param {Date[]} [props.disabledDates=[]] - Array of dates that should be disabled/unselectable (e.g. booked dates)
 * @param {number} [props.price] - Price per night, used to calculate total cost for selected range
 * @param {Object} props.date - Currently selected date range object
 * @param {function} props.setDate - Function to update the selected date range
 * @returns {JSX.Element} A date picker component with range selection and price calculation
 */
export default function DatePicker({
  className,
  disabledDates = [],
  price,
  date,
  setDate,
  initialText = "No dates selected",
  offset = 5,
}: datePickerProps) {
  const today = startOfDay(new Date());
  const {
    tempDate,
    setTempDate,
    open,
    setOpen,
    disabledDays,
    handleApply,
    handleClear,
    getDays,
  } = useDatePicker({ disabledDates, initialDate: date, setDate });

  return (
    <div className={cn("grid gap-2 relative")}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"ghost"}
            className={cn(
              "w-[300px] justify-start text-left font-normal max-w-full border bg-background",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>{initialText}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 max-sm:scale-[0.95] max-h-full overflow-y-auto "
          align="center"
          side="bottom"
          sideOffset={offset}
        >
          <div className="p-3">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={tempDate?.from || today}
              selected={tempDate}
              onSelect={dateSelectHandler(
                disabledDates,
                setTempDate,
                () => tempDate
              )}
              numberOfMonths={2}
              disabled={disabledDays}
            />
          </div>

          <div className="flex flex-col items-center sm:flex-row gap-2 justify-center sm:justify-between border-t p-3">
            {price && getDays(tempDate) > 0 && (
              <p className="text-sm w-full text-muted-foreground text-center">
                {getDays(tempDate)} night(s) x {price} total:
                <span className="font-semibold">
                  {" "}
                  {(price * getDays(tempDate)).toFixed(0)} NOK
                </span>
              </p>
            )}
            {!price && getDays(tempDate) > 0 && (
              <div className="text-sm w-full text-muted-foreground text-center flex flex-col items-center">
                <span className="font-semibold">
                  {tempDate?.from && format(tempDate.from, "LLL dd, y")} -{" "}
                  {tempDate?.to && format(tempDate.to, "LLL dd, y")}
                </span>
                <span> {getDays(tempDate)} night(s) in total</span>
              </div>
            )}
            <div className="w-full flex items-center justify-center sm:justify-end gap-2  ">
              <Button
                variant="outline"
                size="sm"
                onClick={handleClear}
                className="w-20"
              >
                Clear
              </Button>
              <Button
                size="sm"
                onClick={handleApply}
                className="w-20"
                disabled={!tempDate?.from || !tempDate?.to}
              >
                Apply
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
