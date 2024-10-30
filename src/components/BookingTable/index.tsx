"use client";

import * as React from "react";
import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Booking } from "@/types/profile";
import HoverMessage from "@/components/HoverMessage";
import Link from "next/link";
import { EditIcon, IconButton, DeleteIcon } from "@/components/icons";
import { ITEMS_PER_PAGE } from "@/data";
import ConfirmAction from "../ConfirmAction";
import deleteBooking from "@/api/actions/deleteBooking";

/**
 * Column definitions for the booking table.
 */
export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "venue.name",
    header: "Venue",
    cell: ({ row }) => (
      <HoverMessage message={row.original.venue.name}>
        <Link href={`/venues/${row.original.venue.id}`} className="capitalize">
          {row.original.venue.name.length > 10
            ? row.original.venue.name.slice(0, 10) + "..."
            : row.original.venue.name}
        </Link>
      </HoverMessage>
    ),
  },
  {
    accessorKey: "dateFrom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dates
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const booking = row.original;
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })
          .replace(/\//g, ".");
      };
      const checkIn = formatDate(booking.dateFrom);
      const checkOut = formatDate(booking.dateTo);
      return <div>{`${checkIn} - ${checkOut}`}</div>;
    },
    sortingFn: (rowA, rowB) => {
      const dateA = new Date(rowA.original.dateFrom);
      const dateB = new Date(rowB.original.dateFrom);
      return dateA.getTime() - dateB.getTime();
    },
  },
  {
    accessorKey: "options",
    header: "",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <HoverMessage message="Edit booking">
          <IconButton>
            <EditIcon />
          </IconButton>
        </HoverMessage>

        <HoverMessage message="Delete booking">
          <ConfirmAction
            actionType="deleteBooking"
            confirmAction={() => deleteBooking(row.original.id)}
          >
            <div className="p-1 rounded-sm border flex justify-center items-center cursor-pointer h-full hover:bg-accent">
              <DeleteIcon />
            </div>
          </ConfirmAction>
        </HoverMessage>
      </div>
    ),
  },
];

/**
 * BookingTable component that renders a table of bookings with pagination, sorting, and filtering.
 * Number of items per page is defined in the @/data/index.ts file as ITEMS_PER_PAGE
 * Will display venue name, date and options (delete and edit) by default, but any of the columns can be hidden with the dropdown menu
 * @param {Object} props - The component props
 * @param {Booking[]} props.bookings - The list of bookings to display in the table
 * @returns {JSX.Element} The rendered BookingTable component
 */
export function BookingTable({
  bookings,
}: {
  bookings: Booking[];
}): JSX.Element {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data: bookings,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    initialState: {
      pagination: {
        pageSize: ITEMS_PER_PAGE,
      },
    },
  });

  return (
    <div className="w-full max-w-lg text-muted-foreground sm:min-w-[340px] ">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize "
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border bg-background">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
