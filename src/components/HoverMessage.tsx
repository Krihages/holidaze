import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

/**
 * A component that displays a tooltip message when hovering over children elements
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The trigger element that needs to be hovered
 * @param {string|React.ReactNode} props.message - The content to display in the tooltip
 * @param {string} [props.className] - Optional CSS class names to apply to the wrapper
 * @returns {JSX.Element} A tooltip component that shows message on hover
 */
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
