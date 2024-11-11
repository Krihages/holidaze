import { ColumnDef } from "@tanstack/react-table";
import { DeleteIcon } from "@/components/icons";
import ConfirmAction from "@/components/ConfirmAction";
import HoverMessage from "@/components/HoverMessage";
import Link from "next/link";
import deleteBooking from "@/api/actions/deleteBooking";
import { datesColumn } from "./items/dates";

export type UserBooking = {
  id: string;
  venue: string;
  dates: string[];
};

const columns: ColumnDef<UserBooking>[] = [
  {
    accessorKey: "venueName",
    header: "Venue",
    cell: ({ row }) => {
      return (
        <HoverMessage message={row.original.venue}>
          <Link href={`/venues/${row.original.id}`}>
            {row.original.venue.length > 10
              ? row.original.venue.slice(0, 10) + ".."
              : row.original.venue}
          </Link>
        </HoverMessage>
      );
    },
  },

  datesColumn as ColumnDef<UserBooking>,
  {
    accessorKey: "delete",
    header: "Delete",
    cell: ({ row }) => {
      const startDate = new Date(row.original.dates[0]);
      const now = new Date();

      if (startDate < now) {
        return null;
      }

      return (
        <HoverMessage message="Delete booking">
          <ConfirmAction
            actionType="deleteBooking"
            confirmAction={() => deleteBooking(row.original.id)}
          >
            <span className=" p-1 rounded-sm border flex justify-center items-center cursor-pointer h-full hover:bg-accent">
              <DeleteIcon />
            </span>
          </ConfirmAction>
        </HoverMessage>
      );
    },
  },
];
export default columns;
