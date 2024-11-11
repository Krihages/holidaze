import Section from "@/components/Section";

import { redirect } from "next/navigation";
import ProfileHeader from "./ProfileHeader";
import Banner from "./Banner";
import { Profile } from "@/types/profile";

export default async function ProfileInfo({ profile }: { profile: Profile }) {
  if (!profile) {
    redirect("/login");
  }

  return (
    <div className="relative pt-2">
      <Banner banner={profile.banner} name={profile.name} />

      <Section>
        <div className="absolute top-28 lg:top-44 left-[55%] -translate-x-[50%] w-full h-full mx-auto max-w-7xl ">
          <div className="flex flex-col gap-4">
            <ProfileHeader profile={profile} />
          </div>
        </div>
      </Section>
    </div>
  );
}
