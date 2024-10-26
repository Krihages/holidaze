"use server";

import fetchRequest from "@/api/fetch";
import cookies from "@/lib/cookies";

export default async function loginAction(email: string, password: string) {
  try {
    const result = await fetchRequest({
      method: "POST",
      endpoint: "auth/login",
      body: { email, password },
      baseUrl: true,
    });

    if (result.success === false) {
      return JSON.stringify({
        success: false,
        error: result.error?.toString(),
      });
    }

    cookies.set("auth_token", result.data.data.accessToken);
    cookies.set("profile_name", result.data.data.name);
    cookies.set("profile_avatar", result.data.data.avatar.url.toString());

    const profile = await fetchRequest({
      method: "GET",
      endpoint: `profiles/${result.data.data.name}`,
    });

    cookies.set("venue_manager", profile.data?.data.venueManager);
    return JSON.stringify({
      success: true,
      data: result.data,
    });
  } catch (error) {
    if (error) {
      return JSON.stringify({ success: false, error: error });
    } else {
      return JSON.stringify({
        success: false,
        error: { message: "Unknown error" },
      });
    }
  }
}
