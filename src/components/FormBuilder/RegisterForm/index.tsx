"use client";

import { SubmitHandler, FieldValues } from "react-hook-form";
import FormBuilder from "..";
import { z } from "zod";
export default function RegisterForm() {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const registerSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  });

  return (
    <FormBuilder
      zodSchema={registerSchema}
      defaultForm={defaultValues}
      onSubmit={handleSubmit as SubmitHandler<FieldValues>}
    >
      <FormBuilder.Field name="name" type="text" label="Navn" />
      <FormBuilder.Field name="email" type="email" label="E-post" />
      <FormBuilder.Field name="password" type="password" label="Passord" />
      <FormBuilder.Field
        name="confirmPassword"
        type="password"
        label="Bekreft passord"
      />
    </FormBuilder>
  );
}
