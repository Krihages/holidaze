import ProfileInfo from "./_components/ProfileInfo";
import ProfileStats from "./_components/ProfileStats";
import cookies from "@/lib/cookies";

type User = {
  profileName: string;
  manager: boolean;
};

export default function ProfilePage() {
  const name = cookies.checkUser() as User;

  return (
    <div className="flex flex-col gap-32">
      <ProfileInfo name={name.profileName} manager={name.manager} />
      <ProfileStats name={name.profileName} manager={name.manager} />
    </div>
  );
}
