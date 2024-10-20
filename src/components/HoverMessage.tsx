import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/* Children as the trigger (element that needs to be hovered) and message is the content */
export default function HoverMessage({
  children,
  message,
  className,
}: {
  children: React.ReactNode;
  message: string | React.ReactNode;
  className?: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn(className)}>{children}</div>
        </TooltipTrigger>
        <TooltipContent>{message}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
