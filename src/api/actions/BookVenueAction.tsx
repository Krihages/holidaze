"use server";

import { DateRange } from "react-day-picker";
import cookies from "@/lib/cookies";

export default async function bookVenueAction(
  date: DateRange | undefined,
  id: string
) {
  const user = cookies.checkUser();
  if (!user) {
    return "login";
  }
}
