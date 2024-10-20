"use server";

import cookies from "@/lib/cookies";
import { redirect } from "next/navigation";

export default async function logoutAction() {
  cookies.remove("auth_token");
  cookies.remove("profile_name");
  cookies.remove("venue_manager");
  redirect("/");
}
