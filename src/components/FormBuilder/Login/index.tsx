"use client";

import { Button } from "@/components/ui/button";
import FormBuilder from "../../FormBuilder";
import { z } from "zod";
import loginAction from "@/api/actions/loginAction";
import { useState } from "react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useActionHandler } from "@/hooks/useActionHandler";

export default function LoginForm() {
  const [loginStatus, setLoginStatus] = useState<string | null>(null);
  const router = useRouter();
  const handleAction = useActionHandler();

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const defaultValues = { email: "", password: "" };

  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    const resultString = await loginAction(data.email, data.password);
    const result = JSON.parse(resultString);

    if (result.success) {
      handleAction({
        successMessage: "Login successful",
      });
      setLoginStatus("Innlogging vellykket!");
      router.refresh();
    } else {
      handleAction({
        successMessage: "Login failed",
      });
      setLoginStatus(`Innlogging mislyktes: ${result.error}`);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <FormBuilder
        zodSchema={loginSchema}
        defaultForm={defaultValues}
        onSubmit={handleSubmit as SubmitHandler<FieldValues>}
      >
        <FormBuilder.Field name="email" type="email" label="E-post" />
        <FormBuilder.Field name="password" type="password" label="Passord" />
        <Button type="submit">Logg inn</Button>
      </FormBuilder>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}
