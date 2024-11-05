import { Dispatch } from "react";
import { FilterAction, State } from "@/types/filter";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FilterButton({
  dispatch,
  state,
  variant = "primary",
  loading = false,
}: {
  dispatch: Dispatch<FilterAction>;
  state: State;
  variant?: "secondary" | "primary" | "none" | "ghost" | "destructive";
  loading?: boolean;
}) {
  return (
    <div
      onClick={() => dispatch({ type: "filter", payload: state })}
      className={cn(buttonVariants({ variant: variant }))}
    >
      {loading ? "Filtering..." : "Apply filter"}
    </div>
  );
}
