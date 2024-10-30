"use server";
import request from "@/api/requests";
import { VenueType } from "@/types/venue";

export default async function createVenue(data: VenueType) {
  try {
    const response = await request.post({
      endpoint: `venues`,
      body: data,
    });

    if (!response.success) {
      return JSON.stringify({
        success: false,
        error: response.error?.toString(),
      });
    }

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
