"use client";

import { Button } from "@/components/ui/button";
import FormBuilder from "../../FormBuilder";
import { z } from "zod";
import loginAction from "@/api/actions/loginAction";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { toast } from "@/hooks/use-toast";

export default function LoginForm({
  redirectTo = "none",
}: {
  redirectTo?: "profile" | "none";
}) {
  const router = useRouter();

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    remember: z.boolean().optional(),
  });

  const defaultValues = { email: "", password: "", remember: false };

  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    const resultString = await loginAction(data.email, data.password);
    const result = JSON.parse(resultString);

    if (result.success) {
      toast({
        title: "Login successful",
        duration: 5000,
        description: "You are now logged in",
      });

      if (redirectTo === "profile") {
        router.push("/profile");
      } else router.refresh();
    } else {
      toast({
        variant: "destructive",
        duration: 5000,
        title: "Login failed",
        description: result.error,
        className:
          "fixed bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-60",
      });
    }
  };

  return (
    <FormBuilder
      zodSchema={loginSchema}
      defaultForm={defaultValues}
      onSubmit={handleSubmit as SubmitHandler<FieldValues>}
    >
      <FormBuilder.Field name="email" type="email" label="E-post" />
      <FormBuilder.Field name="password" type="password" label="Passord" />
      <div className="flex items-center justify-between gap-4 flex-wrap py-2">
        <FormBuilder.Checkbox name="remember" label="Remember me" />
        <button
          type="button"
          disabled={true}
          className="text-sm  text-blue-600 hover:underline leading-4"
        >
          Forgot password?
        </button>
      </div>
      <Button type="submit">Login</Button>
      <div className="flex flex-col gap-2 text-sm">
        <p className="text-muted-foreground">Dont have an account yet?</p>
        <Link href="/register" className="text-blue-600 underline w-fit">
          Register here
        </Link>
      </div>
    </FormBuilder>
  );
}
