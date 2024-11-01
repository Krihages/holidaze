import { Button, buttonVariants } from "@/components/ui/button";
import { Dispatch } from "react";

import { cn } from "@/lib/utils";
import { FilterAction } from "@/types/filter";

export default function ResetFilter({
  dispatch,
}: {
  dispatch: Dispatch<FilterAction>;
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
