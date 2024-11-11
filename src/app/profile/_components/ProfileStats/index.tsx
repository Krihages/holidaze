import AllStats from "./AllStats";
import Section from "@/components/Section";
import { Profile } from "@/types/profile";
import { VenueType } from "@/types/venue";
import request from "@/api/requests";

export default async function ProfileStats({ profile }: { profile: Profile }) {
  let venuesWithBookings = [];

  if (profile.venueManager && profile?.venues && profile.venues?.length > 0) {
    const response = await request.get({
      endpoint: `profiles/${profile.name}/venues?_bookings=true`,
    });

    venuesWithBookings = response.data.data;
  }

  return (
    <Section>
      <AllStats
        bookings={profile.bookings}
        manager={profile.venueManager}
        venues={venuesWithBookings as VenueType[]}
      />
    </Section>
  );
}
