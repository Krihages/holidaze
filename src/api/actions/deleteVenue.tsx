"use server";

import request from "../requests";
import { revalidatePath } from "next/cache";

export default async function deleteVenue(id: string) {
  try {
    const data = await request.delete({ endpoint: `venues/${id}` });

    if (data.success === false) {
      return {
        success: false,
        error: data.error?.toString(),
        message: "Error deleting booking",
      };
    }
    revalidatePath(`/venues/${id}`);
    return {
      success: true,
      data: data.data,
      message: "Venue successfully deleted",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error?.toString(),
      message: `Error deleting venue: ${error?.toString()}`,
    };
  }
}
