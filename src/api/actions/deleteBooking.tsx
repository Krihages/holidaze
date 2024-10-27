"use server";
import request from "../requests";
import { revalidatePath } from "next/cache";

export default async function deleteBooking(id: string) {
  try {
    console.log("id", id);
    const data = await request.delete({ endpoint: `bookings/${id}` });
    console.log(data);
    if (data.success === false) {
      return JSON.stringify({
        success: false,
        error: data.error?.toString(),
      });
    }
    console.log(data);

    revalidatePath("/profile");
    return JSON.stringify({
      success: true,
      data: data.data,
    });
  } catch (error) {
    console.error(error);
    return JSON.stringify({
      success: false,
      error: error?.toString(),
    });
  }
}
