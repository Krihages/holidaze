"use server";
import request from "../requests";
import { revalidatePath } from "next/cache";

export default async function deleteBooking(id: string) {
  try {
    const data = await request.delete({ endpoint: `bookings/${id}` });

    if (data.success === false) {
      return {
        success: false,
        error: data.error?.toString(),
        message: "Error deleting booking",
      };
    }
    revalidatePath("/profile");
    return {
      success: true,
      data: data.data,
      message: "Booking successfully deleted",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error?.toString(),
      message: `Error deleting booking: ${error?.toString()}`,
    };
  }
}
