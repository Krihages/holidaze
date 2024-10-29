import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HoverMessage from "@/components/HoverMessage";

/**
 * A component that displays a user's profile avatar with hover functionality and fallback
 * fallback is the first two letters of the name capitalized
 * @param {Object} props - The component props
 * @param {string} props.url - The URL of the profile image
 * @param {string} props.name - The name of the user
 * @returns {JSX.Element} A profile avatar component with hover message
 */
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
