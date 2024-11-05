import { DialogClose } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Close({
  children,
  variant = "primary",
  className,
  loading = false,
  loadingText = "Loading...",
}: {
  children: React.ReactNode;
  variant?: "secondary" | "primary" | "none" | "ghost" | "destructive";
  className?: string;

  loading?: boolean;
  loadingText?: string;
}) {
  return (
    <DialogClose
      disabled={loading}
      className={cn("cursor-pointer", buttonVariants({ variant }), className)}
    >
      {loading ? loadingText : children}
    </DialogClose>
  );
}
