import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckItem({
  name,
  label,
  defaultValue,
  onChange,
}: {
  name: string;
  label: string;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex items-center gap-2">
          <Checkbox
            id={name}
            defaultChecked={defaultValue}
            checked={field.value}
            onCheckedChange={onChange ? onChange : field.onChange}
          />
          <Label htmlFor={name}>{label}</Label>
        </div>
      )}
    />
  );
}
