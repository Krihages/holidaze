"use server";
import request from "@/api/requests";
import { VenueType } from "@/types/venue";

export default async function createVenue(data: VenueType) {
  console.log("data for create venue", data);
  try {
    const response = await request.post({
      endpoint: `venues`,
      body: data,
    });
    console.log("response for create venue", response);
    if (!response.success) {
      return JSON.stringify({
        success: false,
        error: response.error?.toString(),
      });
    }

    return JSON.stringify({ success: true, data: response.data });
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
