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

export default function FormBuilder({
  children,
  onSubmit,
  zodSchema,
  defaultForm,
  className,
}: FormBuilderProps) {
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
