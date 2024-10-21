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
      <Section>
        <div className="flex flex-col lg:flex-row gap-12 justify-between w-full">
          <VenueImages images={venue?.media} />

          <div className="flex flex-col gap-y-4 max-w-[300px] lg:max-w-lg justify-between w-full  mx-auto lg:mx-0">
            <VenueHeader venue={venue} />
            <HostDetails host={venue?.owner} />
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
              <Booking venue={venue} />
              <Facilities facilities={venue?.meta} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
