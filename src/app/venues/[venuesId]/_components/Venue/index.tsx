import Section from "@/components/Section";
import request from "@/api/requests";
import HandleError from "@/api/HandleError";
import VenueImages from "./VenueImages";
import VenueHeader from "./VenueHeader";
import Facilities from "./Facilities";
import HostDetails from "./HostDetails";
import Booking from "./Booking";
import cookies from "@/lib/cookies";
import OwnerOptions from "./OwnerOptions";

export default async function Venue({ id }: { id: string }) {
  const username = cookies.get("profile_name");

  const { data, error, success } = await request.get({
    endpoint: `venues/${id}?_owner=true&_bookings=true`,
  });

  if (!success) {
    return (
      <HandleError message={(error as Error).message || "Unknown error"} />
    );
  }
  const venue = data.data;

  const isOwner = venue.owner.name === username;

  return (
    <>
      <VenueImages images={venue?.media} />
      <Section>
        {isOwner && (
          <div className="flex justify-end mb-4 max-w-xl">
            <OwnerOptions venue={venue} />
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-between w-full mx-auto   ">
          <div className="flex flex-col gap-8 w-full max-w-xl">
            <VenueHeader venue={venue} />
            <div className="flex flex-wrap gap-8 justify-between">
              <HostDetails venue={venue} />
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
