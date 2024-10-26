import { z } from "zod";
import FormBuilder from "@/components/FormBuilder";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Loaders/Spinner";

export default function Form({ venueManager = false }) {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    manager: venueManager,
  };

  const handleSubmit = (data: FieldValues) => {};

  const registerSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    manager: z.boolean(),
  });

  return (
    <FormBuilder
      zodSchema={registerSchema}
      defaultForm={defaultValues}
      onSubmit={handleSubmit as SubmitHandler<FieldValues>}
    >
      <FormBuilder.Field name="name" type="text" label="Name" />
      <FormBuilder.Field name="email" type="email" label="Email" />
      <FormBuilder.Field name="password" type="password" label="Password" />
      <FormBuilder.Field
        name="confirmPassword"
        type="password"
        label="Confirm password"
      />
      <Button disabled={true} type="submit" className="flex items-center gap-4">
        <Spinner />
        Loading...
      </Button>
    </FormBuilder>
  );
}
