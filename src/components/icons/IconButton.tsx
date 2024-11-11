"use client";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "../ui/button";

/* Button styled icon */

type IconButtonProps = {
  children: React.ReactNode;
  size?: number;
  onClick?: () => void;
  variant?: ButtonProps["variant"];
  className?: string;
  ariaLabel?: string;
  title?: string;
};

export default function IconButton({
  children,
  onClick,
  variant = "reverse",
  className,
  ariaLabel,
}: IconButtonProps) {
  return (
    <Button
      aria-label={ariaLabel || "Icon button"}
      className={cn(`p-1 flex bg-opacity-50`, className)}
      variant={variant}
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
