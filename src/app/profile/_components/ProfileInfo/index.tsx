import Section from "@/components/Section";
import cookies from "@/lib/cookies";
import request from "@/api/requests";
import { redirect } from "next/navigation";
import ProfileHeader from "./ProfileHeader";
import Banner from "./Banner";

export default async function ProfileInfo({
  name,
  manager,
}: {
  name: string;
  manager: boolean;
}) {
  const data = await request.get({ endpoint: `profiles/${name}` });
  const user = data.data.data;

  console.log(user);
  if (!data.success) {
    redirect("/login");
  }

  return (
    <div className="relative">
      <Banner banner={user.banner} name={user.name} />

      <Section>
        <div className="absolute top-28 lg:top-44 left-[55%] -translate-x-[50%] w-full h-full mx-auto max-w-7xl ">
          <div className="flex flex-col gap-4">
            <ProfileHeader user={user} />
          </div>
        </div>
      </Section>
    </div>
  );
}
