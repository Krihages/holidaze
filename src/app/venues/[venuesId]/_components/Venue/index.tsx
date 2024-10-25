import Section from "@/components/Section";
import request from "@/api/requests";
import HandleError from "@/api/HandleError";
import VenueImages from "./VenueImages";
import VenueHeader from "./VenueHeader";
import Facilities from "./Facilities";
import HostDetails from "./HostDetails";
import Booking from "./Booking";
export default async function Venue({ id }: { id: string }) {
  const { data, error, success } = await request.get({
    endpoint: `venues/${id}?_owner=true&_bookings=true`,
  });

  if (!success) {
    return (
      <HandleError message={(error as Error).message || "Unknown error"} />
    );
  }
  const venue = data.data;
  console.log(venue);
  return (
    <>
      <VenueImages images={venue?.media} />
      <Section>
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-between w-full mx-auto   ">
          <div className="flex flex-col gap-8 w-full max-w-xl">
            <VenueHeader venue={venue} />
            <div className="flex flex-wrap gap-8 justify-between">
              <HostDetails host={venue?.owner} />
              <Facilities facilities={venue?.meta} />
            </div>
          </div>
          <div className="max-w-xl w-full self-start mx-auto lg:mx-0 lg:max-w-fit">
            <Booking venue={venue} />
          </div>
        </div>
      </Section>
    </>
  );
}
