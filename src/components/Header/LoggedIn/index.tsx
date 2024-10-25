import { DropdownMenu } from "@/components/ui/dropdown-menu";
import Trigger from "./Trigger";
import MenuContent from "./MenuContent";

export default async function LoggedIn({
  name,
  avatar,
  manager,
}: {
  name: string;
  avatar: string;
  manager: boolean;
}) {
  return (
    <DropdownMenu>
      <Trigger name={name} avatar={avatar} manager={manager} />
      <MenuContent name={name} manager={manager} />
    </DropdownMenu>
  );
}
