import { DialogClose } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Close({
  children,
  variant = "primary",
  className,
}: {
  children: React.ReactNode;
  variant?: "secondary" | "primary" | "none" | "ghost" | "destructive";
  className?: string;
}) {
  return (
    <DialogClose
      className={cn("cursor-pointer", buttonVariants({ variant }), className)}
    >
      {children}
    </DialogClose>
  );
}
