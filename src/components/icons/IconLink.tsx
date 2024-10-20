import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function IconLink({
  children,
  href,
  className,

  variant = "outline",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  size?: number;
  variant?: "outline" | "default";
}) {
  return (
    <Link
      href={href ?? ""}
      className={cn(className, buttonVariants({ variant: variant }), ` p-1`)}
    >
      {children}
    </Link>
  );
}
