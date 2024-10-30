import React, { forwardRef } from "react";
import { DialogContent, DialogDescription } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Content = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    description?: string;
  }
>(({ children, className, description }, ref) => {
  return (
    <DialogContent
      ref={ref}
      className={cn(
        "z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-6 px-4 sm:px-6 lg:px-10 rounded-lg max-w-2xl w-full max-h-full overflow-y-auto flex flex-col gap-6",
        className
      )}
    >
      {description && (
        <DialogDescription className="sr-only">{description}</DialogDescription>
      )}
      {children}
    </DialogContent>
  );
});

Content.displayName = "Content";

export default Content;
