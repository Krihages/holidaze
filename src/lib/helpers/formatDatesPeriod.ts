import { formatDate } from "date-fns";

export default function formatDatesPeriod(dateFrom: string, dateTo: string) {
  const checkIn = formatDate(dateFrom, "dd.MM.yy");
  const checkOut = formatDate(dateTo, "dd.MM.yy");
  return `${checkIn} - ${checkOut}`;
}
