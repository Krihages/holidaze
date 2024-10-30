import { z } from "zod";
import FormBuilder from "@/components/FormBuilder";
import { SubmitHandler, FieldValues } from "react-hook-form";

import registerAction from "@/api/actions/registerAction";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ... (resten av typene forblir uendret)

type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  venueManager: boolean;
};

export default function Form({ manager = false }) {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    venueManager: manager,
  };
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FieldValues) => {
    setIsSubmitting(true);
    try {
      const result = await registerAction(data as RegisterData);

      if (result?.success) {
        router.push("/profile");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const registerSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    venueManager: z.boolean(),
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
      <FormBuilder.Button
        className="flex items-center gap-4 mt-6"
        isSubmitting={isSubmitting}
      >
        Submit
      </FormBuilder.Button>
    </FormBuilder>
  );
}
