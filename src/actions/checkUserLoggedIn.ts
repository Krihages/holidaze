"use server";

import cookies from "@/lib/cookies";

export default async function checkUserLoggedIn() {
  return cookies.checkUser();
}
