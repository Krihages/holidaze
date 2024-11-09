import request from "@/api/requests";
import ProfileInfo from "./ProfileInfo";
import ProfileStats from "./ProfileStats";

/* 
This is mainly used for fetching the profile data since its needed in both the profile and stats components
Had to take outside ProfilePage to be able to use Suspense
*/
export default async function ProfileAndStats({ name }: { name: string }) {
  const data = await request.get({
    endpoint: `profiles/${name}?_bookings=true&_venues=true`,
  });

  const profile = data.data.data;

  return (
    <div className="flex flex-col gap-32">
      <ProfileInfo profile={profile} />
      <ProfileStats profile={profile} />
    </div>
  );
}
