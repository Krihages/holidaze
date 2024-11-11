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
      return JSON.stringify({ success: true, data: result.data });
    } else {
      return JSON.stringify({ success: false, error: result.error });
    }
  } catch (error) {
    return JSON.stringify({ success: false, error: error });
  }
}
