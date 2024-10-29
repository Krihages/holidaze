"use client";

import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface FieldProps {
  name: string;
  label?: string;
  description?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
}

export default function Field({
  name,
  label,
  description,
  type = "text",
  placeholder,
  className,
  defaultValue,
}: FieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              defaultValue={defaultValue}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
