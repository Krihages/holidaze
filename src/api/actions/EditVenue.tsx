"use server";

import request from "../requests";
import { VenueType } from "@/types/venue";
import { revalidatePath } from "next/cache";
export default async function editVenue(venue: VenueType, id: string) {
  try {
    const response = await request.put({
      endpoint: `venues/${id}`,
      body: venue,
    });

    if (!response.success) {
      return JSON.stringify({
        success: false,
        error: response.error?.toString(),
      });
    }
    revalidatePath(`/venues/${id}`);
    return { success: true, data: response.data };
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
