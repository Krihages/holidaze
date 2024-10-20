"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

/* Button styled icon */

type IconButtonProps = {
  children: React.ReactNode;
  size?: number;
  onClick?: () => void;
  variant?: "outline" | "default";
  className?: string;
  ariaLabel?: string;
  title?: string;
};

export default function IconButton({
  children,
  onClick,
  variant = "outline",
  className,
  ariaLabel,
}: IconButtonProps) {
  return (
    <Button
      aria-label={ariaLabel}
      variant={variant}
      className={cn(`p-1 bg-opacity-50`, className)}
      onClick={
        onClick &&
        ((e) => {
          e.preventDefault();
          onClick();
        })
      }
    >
      {children}
    </Button>
  );
}
