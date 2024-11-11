import { DateRange } from "react-day-picker";

export type datePickerProps = {
  className?: string;
  disabledDates?: { from: Date; to: Date }[];
  price?: number | undefined;
  date?: DateRange | undefined;
  setDate?: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  initialText?: string;
  offset?: number;
};
