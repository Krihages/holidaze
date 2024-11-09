import ProfileAndStats from "./_components/ProfileAndStats";
import Loader from "./_components/Loader";
import cookies from "@/lib/cookies";
import { Suspense } from "react";

export const metadata = {
  title: "Holidaze | Profile",
  description:
    "Manage your Holidaze profile, view your bookings and venues, update your personal information and track your hosting activity all in one place.",
};

type User = {
  profileName: string;
  manager: boolean;
};

export default function ProfilePage() {
  const name = cookies.checkUser() as User;

  return (
    <Suspense fallback={<Loader />}>
      <ProfileAndStats name={name.profileName} />
    </Suspense>
  );
}
