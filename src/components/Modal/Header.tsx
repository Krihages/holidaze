import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { XMarkIcon } from "../icons";
import { cn } from "@/lib/utils";

/* 
Modal Header content
- Children prop (the header text) should be in either text format, icon or a mix between them
- Close button for closing the opened Modal 
*/
export default function Header({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <DialogHeader className="flex flex-row justify-between">
      <DialogTitle className={cn("text-xl font-bold", className)}>
        {children}
      </DialogTitle>
      <DialogClose className="cursor-pointer">
        <XMarkIcon />
      </DialogClose>
    </DialogHeader>
  );
}
