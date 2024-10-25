import Avatar from "./Avatar";
import { User } from "@/types/venue";
import { Button } from "@/components/ui/button";

export default function ProfileInfo({ user }: { user: User }) {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-10 w-full max-w-screen ">
      <Avatar media={user.avatar} name={user.name} />
      <div className="flex flex-col gap-4 justify-end">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit Profile</Button>
          <Button>New Venue</Button>
        </div>
      </div>
    </div>
  );
}
