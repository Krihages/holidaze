import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HoverMessage from "@/components/HoverMessage";

export function ProfileAvatar({ url, name }: { url: string; name: string }) {
  return (
    <HoverMessage message={`${name} profile avatar`}>
      <Avatar>
        <AvatarImage
          src={url}
          alt={"Profile avatar"}
          className="cursor-pointer "
        />
        <AvatarFallback className="text-foreground">
          {name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </HoverMessage>
  );
}
