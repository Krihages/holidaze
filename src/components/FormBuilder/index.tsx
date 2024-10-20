"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import Field from "./Field";

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
