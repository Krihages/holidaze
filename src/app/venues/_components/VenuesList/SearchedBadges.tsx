import { SearchParams } from "@/types/filter";
import { Badge } from "@/components/ui/badge";
import HoverMessage from "@/components/HoverMessage";

export default function SearchedBadges({ params }: { params: SearchParams }) {
  if (Object.keys(params).length === 0) return null;

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">Search result for:</p>
      <div className="flex gap-2 flex-wrap">
        {Object.entries(params).map(([key, value]) => {
          if (key === "guestCount") {
            return (
              <HoverMessage
                message={`Venue must be able to accommodate a minimum of ${value} guests`}
              >
                <Badge key={key}>{value} guests</Badge>
              </HoverMessage>
            );
          } else if (key === "date") {
            return (
              <HoverMessage message={`Selected dates (check in - check out)`}>
                <Badge key={key}>{value}</Badge>
              </HoverMessage>
            );
          } else if (
            key === "pet" ||
            key === "parking" ||
            key === "wifi" ||
            key === "breakfast"
          ) {
            let badgeText = "";
            if (key === "breakfast" || key === "wifi") badgeText = "included";
            else if (key === "pet") badgeText = "friendly";
            else if (key === "parking") badgeText = "available";

            return (
              <Badge key={key}>
                {key} {badgeText}
              </Badge>
            );
          } else if (key === "price") {
            return <Badge key={key}>{value} NOK / night</Badge>;
          } else if (key === "query") {
            return (
              <HoverMessage message={`Search query for: "${value}"`}>
                <Badge key={key}>"{value}"</Badge>
              </HoverMessage>
            );
          }
          return (
            <Badge key={key}>
              {key}: {value}
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
