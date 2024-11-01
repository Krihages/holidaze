import ProfileAndStats from "./_components/ProfileAndStats";
import Loader from "./_components/Loader";
import cookies from "@/lib/cookies";
import { Suspense } from "react";

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
