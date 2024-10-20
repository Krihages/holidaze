import LogoutButton from "./LogoutButton";
import cookies from "@/lib/cookies";
import { updateProfileCookies } from "@/api/actions/profileActions";

export default async function LoggedIn() {
  const name = cookies.get("profile_name") as string;
  let ifManager = cookies.get("venue_manager") as string;

  console.log("ifManager", ifManager);

  if (ifManager === undefined) {
    const profile = await updateProfileCookies(name);

    ifManager = profile.data?.data.venueManager;
  }

  return (
    <div>
      <LogoutButton />
    </div>
  );
}
