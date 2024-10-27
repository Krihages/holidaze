import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/Header/LoggedIn/LogoutButton";
import Link from "next/link";
import { AccountIcon } from "@/components/icons";

type User = {
  name: string;
  manager: boolean;
};

export default function MenuContent({ name, manager }: User) {
  return (
    <DropdownMenuContent className="flex flex-col gap-2 p-4 font-semibold text-muted-foreground">
      <p>
        <span className="font-normal">Welcome</span> <span>{name}</span>
      </p>
      <div className="flex flex-col gap-2 py-4  font-normal border-y">
        <Link href="/profile">
          <DropdownMenuItem className="w-full cursor-pointer hover:bg-info  ">
            Your profile
          </DropdownMenuItem>
        </Link>
        {manager && (
          <Link href="/venue-manager">
            <DropdownMenuItem className="w-full cursor-pointer hover:bg-info ">
              Add new venue
            </DropdownMenuItem>
          </Link>
        )}
      </div>
      <LogoutButton variant="outline" />
    </DropdownMenuContent>
  );
}
