import { cn } from "@/lib/utils";
import { CheckboxUi } from "../ui/checkboxui";

export default function Checkbox({
  text,
  className,
  checked,
  onCheckedChange,
}: {
  text?: string;
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <div
      className={cn(
        "flex justify-start gap-6 text-base ",
        !checked && "text-muted-foreground",
        className
      )}
    >
      <CheckboxUi
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="size-5"
      />
      {text}
    </div>
  );
}
