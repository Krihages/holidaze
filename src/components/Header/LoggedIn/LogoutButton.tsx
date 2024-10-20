"use client";

import { Button } from "@/components/ui/button";
import logoutAction from "@/api/actions/LogoutAction";
import { useFormStatus } from "react-dom";
import { useActionHandler } from "@/hooks/useActionHandler";

export default function LogoutButton() {
  const { pending } = useFormStatus();
  const handleAction = useActionHandler();

  const handleLogout = handleAction({
    action: logoutAction,
    successMessage: "You have been logged out",
    errorMessage: "Something went wrong",
  });

  return (
    <form action={handleLogout}>
      <Button type="submit" disabled={pending}>
        {pending ? "Logging out..." : "Logout"}
      </Button>
    </form>
  );
}
