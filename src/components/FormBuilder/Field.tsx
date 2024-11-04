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
import { ChangeEvent } from "react";

interface FieldProps {
  name: string;
  label?: string;
  description?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

/**
 * Field component that renders a form field with label, input, description, and message.
 *
 * @param {FieldProps} props - The props for the Field component.
 * @returns {JSX.Element} The rendered Field component.
 */
export default function Field({
  name,
  label,
  description,
  type = "text",
  placeholder,
  className,
  defaultValue,
  onChange,
  value = undefined,
}: FieldProps): JSX.Element {
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
              defaultValue={defaultValue}
              {...(onChange ? { onChange } : field)}
              {...(value !== undefined ? { value } : field)}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
