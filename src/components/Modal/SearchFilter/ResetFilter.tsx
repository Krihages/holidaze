import { Button, buttonVariants } from "@/components/ui/button";
import { Dispatch } from "react";

import { cn } from "@/lib/utils";
import { ResetAction } from "@/types/filter";

export default function ResetFilter({
  dispatch,
}: {
  dispatch: Dispatch<ResetAction>;
}) {
  return (
    <Button
      className={cn(buttonVariants({ variant: "ghost" }))}
      onClick={() => dispatch({ type: "reset" })}
    >
      Reset filter
    </Button>
  );
}
