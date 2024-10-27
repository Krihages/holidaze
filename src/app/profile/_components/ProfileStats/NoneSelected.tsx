import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
/*
    This component is used when no tab is selected in the ProfileStats component
    Currently it will only be displayed if the user has 0 items in all the other tabs 
    for customers this means: 0 bookings and 0 favorites
    For managers it means: 0 venues and 0 customer bookings + 0 favorites and bookings
*/

export default function NoneSelected() {
  return (
    <div className="text-muted-foreground flex flex-col gap-4 items-center pt-20 text-center w-full">
      <p className="text-lg font-semibold">No items to display</p>
      <p className=" max-w-sm">
        Add some items to your profile to see them here (favorites, bookings,
        etc)
      </p>
      <Link href="/venues" className={buttonVariants({ variant: "primary" })}>
        All venues
      </Link>
    </div>
  );
}
