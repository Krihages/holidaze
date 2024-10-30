import { ColumnDef } from "@tanstack/react-table";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import formatDatesPeriod from "@/lib/helpers/formatDatesPeriod";

/**
 * Column definition for displaying and sorting booking dates (from and to)
 * expects an array of two dates in the format of [from, to]
 * @type {ColumnDef<UserBooking>}
 *
 * @property {string} accessorKey - Key to access the dates array from the row data
 * @property {Function} header - Renders a sortable button header with "Dates" text and sort icon
 * @property {Function} cell - Formats and displays the date period using start and end dates
 * @property {boolean} enableSorting - Enables column sorting functionality
 * @property {Function} sortingFn - Custom sort function that compares booking start dates
 * @property {Array<T>} data - Array of data to be displayed in the column
 */

export interface BaseBooking {
  dates: string[];
}

export const datesColumn: ColumnDef<BaseBooking> = {
  accessorKey: "dates",
  header: ({ column }) => (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      Booked dates
      <CaretSortIcon className="ml-2 h-4 w-4" />
    </Button>
  ),
  cell: ({ row }) =>
    formatDatesPeriod(row.original.dates[0], row.original.dates[1]),
  enableSorting: true,
  sortingFn: (rowA, rowB) => {
    const dateA = new Date(rowA.original.dates[0]);
    const dateB = new Date(rowB.original.dates[0]);
    return dateB.getTime() - dateA.getTime();
  },
};
