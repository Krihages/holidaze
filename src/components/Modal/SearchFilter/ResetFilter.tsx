import { Button } from "@/components/ui/button";
import { Dispatch } from "react";
import { ResetAction } from "@/types/filter";

export default function ResetFilter({
  dispatch,
}: {
  dispatch: Dispatch<ResetAction>;
}) {
  return (
    <Button variant="outline" onClick={() => dispatch({ type: "reset" })}>
      Reset filter
    </Button>
  );
}
