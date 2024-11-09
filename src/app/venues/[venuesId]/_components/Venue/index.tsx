import Section from "@/components/Section";
import request from "@/api/requests";
import HandleError from "@/api/HandleError";
import VenueImages from "./VenueImages";
import VenueHeader from "./VenueHeader";
import Facilities from "./Facilities";

import Booking from "./Booking";
import cookies from "@/lib/cookies";
import OwnerOptions from "./OwnerOptions";
import CustomerBookings from "./owner/CustomerBookings";
import VenueMap from "./VenueMap";
import HostDetails from "./HostDetails";

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
  const isLoggedIn = cookies.checkUser();
  const isOwner = venue.owner.name === username;
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <VenueImages images={venue?.media} />
      <Section className="pt-12">
        {isOwner && (
          <div className="flex justify-end mb-4 max-w-xl">
            <OwnerOptions venue={venue} />
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-between w-full mx-auto   ">
          <div className="flex flex-col  w-full max-w-xl">
            <VenueHeader venue={venue} />
            <Facilities facilities={venue?.meta} />
            <VenueMap />
            <HostDetails venue={venue} />
          </div>

          <div className="max-w-xl w-full self-start mx-auto lg:mx-0 lg:max-w-fit">
            {isOwner ? (
              <CustomerBookings bookings={venue.bookings} />
            ) : (
              <Booking venue={venue} isLoggedIn={isLoggedIn} />
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
