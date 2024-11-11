import { cn } from "@/lib/utils";
import { CheckboxUi } from "../ui/checkboxui";

type Props = {
  text?: string;
  className?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export default function Checkbox({
  text,
  className,
  checked,
  onCheckedChange,
}: Props) {
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
