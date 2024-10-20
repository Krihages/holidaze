import { VenueType } from "@/types/venue";
import {
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import Location from "./Location";

export default function VenueDetails({ venue }: { venue: VenueType }) {
  return (
    <CardContent className=" px-0 flex flex-col justify-between  py-3">
      <div className="flex  justify-between">
        <CardHeader className="px-0 py-1 ">
          <CardTitle>{venue.name}</CardTitle>
        </CardHeader>
        <CardDescription className=" text-base  text-foreground flex-wrap mt-0 ">
          <span className="font-semibold mt-0 ">{venue.price} nok</span>{" "}
          <span className="text-muted-foreground">/night</span>
        </CardDescription>
      </div>
      <Location location={venue.location} />
    </CardContent>
  );
}
