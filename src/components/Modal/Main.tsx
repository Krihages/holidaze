import { cn } from "@/lib/utils";

/* 
   This is used for displaying the main content of the opened Modal
 - Children prop can be a mix of any html / react components or just text / icon
*/
export default function Main({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className, "flex flex-col gap-8")}>{children}</div>;
}
