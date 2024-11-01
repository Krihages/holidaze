import Avatar from "./Avatar";
import { Button } from "@/components/ui/button";
import { Profile } from "@/types/profile";
import CreateVenue from "@/components/Modal/CreateVenue";

export default function ProfileInfo({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-10 w-full max-w-screen ">
      <Avatar media={profile.avatar} name={profile.name} />
      <div className="flex flex-col gap-4 justify-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">{profile.name}</h1>
          <p className="text-muted-foreground">{profile.email}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit Profile</Button>
          <CreateVenue />
        </div>
      </div>
    </div>
  );
}
