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
import { Textarea } from "../ui/textarea";

type TextAreaFieldProps = {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  rows?: number;
};

/**
 * A form textarea field component that integrates with react-hook-form
 * @param {TextAreaFieldProps} props - The component props
 * @param {string} props.name - The name of the form field
 * @param {string} [props.label] - Optional label text
 * @param {string} [props.description] - Optional description text
 * @param {string} [props.placeholder] - Optional placeholder text
 * @param {number} [props.rows=3] - Number of visible text rows
 * @returns {JSX.Element} A textarea form field component
 */
export default function TextAreaField({
  name,
  label,
  description,
  placeholder,
  rows = 6,
}: TextAreaFieldProps): JSX.Element {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={placeholder}
              rows={rows}
              {...field}
              className="resize-none"
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
