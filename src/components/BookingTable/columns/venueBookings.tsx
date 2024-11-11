import { ColumnDef } from "@tanstack/react-table";
import { datesColumn } from "./items/dates";
import HoverMessage from "@/components/HoverMessage";
type VenueBooking = {
  id: string;
  customer: string;
  dates: string[];
  guests: number;
};

const columns: ColumnDef<VenueBooking>[] = [
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => {
      return (
        <HoverMessage message={row.original.customer}>
          {row.original.customer.length > 10
            ? row.original.customer.slice(0, 10) + ".."
            : row.original.customer}
        </HoverMessage>
      );
    },
  },
  datesColumn as ColumnDef<VenueBooking>,
  {
    accessorKey: "guests",
    header: "Guests",
  },
];

export default columns;
