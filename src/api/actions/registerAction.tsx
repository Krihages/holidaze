"use server";

import fetchRequest from "@/api/fetch";
import loginAction from "./loginAction";

type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  venueManager: boolean;
};

type LoginResult = {
  success: boolean;
  error?: string | null | { message: string };
  data?: { name: string; email: string } | null;
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
      return {
        success: false,
        error: result.error,
      };
    }

    const loginResultString = await loginAction(data.email, data.password);
    const loginResult: LoginResult = JSON.parse(loginResultString);

    if (loginResult.success === false) {
      return {
        success: false,
        error: loginResult?.error?.toString(),
      };
    }

    return {
      success: true,
      data: loginResult.data,
    };
  } catch (error) {
    if (error) {
      return { success: false, error: error };
    } else {
      return {
        success: false,
        error: { message: "Unknown error" },
      };
    }
  }
}
