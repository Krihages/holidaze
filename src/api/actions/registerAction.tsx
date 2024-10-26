"use server";

import fetchRequest from "@/api/fetch";
import loginAction from "./loginAction";

type RegisterData = {
  email: string;
  password: string;
  name: string;
  venueManager: boolean;
};

export default async function registerAction(data: RegisterData) {
  try {
    const result = await fetchRequest({
      method: "POST",
      endpoint: "auth/register",
      body: data,
      baseUrl: true,
    });

    if (result.success === false) {
      return JSON.stringify({
        success: false,
        error: result.error?.toString(),
      });
    }

    await loginAction(data.email, data.password);

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
