"use server";

import cookies from "@/lib/cookies";
import { BookingProps } from "@/types/bookings";
import request from "@/api/requests";

export default async function bookVenueAction(props: BookingProps) {
  const user = cookies.checkUser();
  if (!user) {
    return "login";
  }
  try {
    const result = await request.post({ endpoint: "bookings", body: props });

    if (result.success) {
      return { success: true, data: result.data };
    } else {
      return { success: false, error: result.error };
    }
  } catch (error) {
    console.log("error", error);
    return { success: false, error: error };
  }
}
