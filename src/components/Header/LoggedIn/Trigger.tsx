import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { ChevronDown } from "@/components/icons";
export default function Trigger({
  name,
  avatar,
  manager,
}: {
  name: string;
  avatar: string;
  manager: boolean;
}) {
  return (
    <DropdownMenuTrigger>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-start  leading-tight">
          <p className="font-semibold">{name}</p>
          <p className="text-sm">{manager ? "Manager" : "Customer"}</p>
        </div>
        <div className="relative border border-accent p-[5px] rounded-full">
          <ProfileAvatar url={avatar} name={name} />
          <div className="absolute left-9 top-9 flex items-center justify-center">
            <div className="bg-white rounded-full p-[3px]">
              <ChevronDown color="primary-light" />
            </div>
          </div>
        </div>
      </div>
    </DropdownMenuTrigger>
  );
}
