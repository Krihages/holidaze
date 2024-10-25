"use server";

import cookies from "@/lib/cookies";
import request from "@/api/requests";

export async function getProfileData() {
  const name = cookies.get("profile_name");
  let ifManager = cookies.get("venue_manager");
  if (!name) {
    return { name: undefined, ifManager: undefined };
  }
  if (ifManager === undefined) {
    const profile = await updateProfileCookies(name as string);
    ifManager = profile.data?.data.venueManager;
  }
  return { name, ifManager };
}

export async function updateProfileCookies(name: string) {
  "use server";

  const { data, error } = await request.get({
    endpoint: `profiles/${name}`,
  });

  if (data?.data) {
    try {
      cookies.set("venue_manager", "testt");
    } catch (e) {
      console.error("Feil ved setting av cookie:", e);
    }
  }

  return { data, error };
}
