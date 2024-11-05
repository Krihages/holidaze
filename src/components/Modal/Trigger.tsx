import { cn } from "@/lib/utils";
import { DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "../ui/button";

/* 
   Trigger/button to open the Modal
 - Children prop (trigger/btn text) should be either text, icon or a mix between them
 - Choosing a different variant than "none" (set as default) will style the trigger as a button
*/

export default function Trigger({
  children,
  variant = "none",
  disabled = false,
  className,
  loading = false,
  loadingText = "Loading...",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?:
    | "none"
    | "primary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive"
    | "reverse"
    | "default";
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
}) {
  return (
    <DialogTrigger
      disabled={disabled || loading}
      className={cn(
        className,
        variant !== "none"
          ? buttonVariants({ variant: variant })
          : "cursor-pointer p-1"
      )}
    >
      {loading ? loadingText : children}
    </DialogTrigger>
  );
}
