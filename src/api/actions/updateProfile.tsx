"use server";

import { FieldValues } from "react-hook-form";
import request from "../requests";
import cookies from "@/lib/cookies";

export default async function updateProfile(body: FieldValues, name: string) {
  const data = await request.put({
    endpoint: `profiles/${name}`,
    body: body,
  });

  if (data.success === false) {
    return {
      success: false,
      error: data.error?.toString(),
      message: `Error updating profile: ${data.error?.toString()}`,
    };
  }

  cookies.set("profile_avatar", data.data.data.avatar.url.toString());
  cookies.set("venue_manager", data.data.data.venueManager);

  return {
    success: true,
    data: data.data,
    message: "Profile successfully updated",
  };
}
