"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import Field from "./Field";
import CheckItem from "./CheckItem";
import FormButton from "./FormButton";
import Textarea from "./Textarea";

type FormBuilderProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  zodSchema: z.ZodSchema<FieldValues>;
  defaultForm: FieldValues;
  className?: string;
};

/**
 * FormBuilder component that provides a form context using react-hook-form and zod for validation.
 *
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The form fields and components to be rendered inside the form
 * @param {SubmitHandler<FieldValues>} props.onSubmit - The function to call when the form is submitted
 * @param {z.ZodSchema<FieldValues>} props.zodSchema - The zod schema for form validation
 * @param {FieldValues} props.defaultForm - The default values for the form fields
 * @param {string} [props.className] - Additional class names for the form (optional)
 * @returns {JSX.Element} The FormBuilder component
 */
export default function FormBuilder({
  children,
  onSubmit,
  zodSchema,
  defaultForm,
  className,
}: FormBuilderProps): JSX.Element {
  const formMethods = useForm<FieldValues>({
    resolver: zodResolver(zodSchema),
    defaultValues: defaultForm,
  });

  return (
    <Form {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-4", className)}
      >
        {children}
      </form>
    </Form>
  );
}

FormBuilder.Field = Field;
FormBuilder.Checkbox = CheckItem;
FormBuilder.Button = FormButton;
FormBuilder.Textarea = Textarea;
