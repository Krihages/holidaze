"use client";

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

type Error = {
  message: string;
};

export default function HandleError(error: Error) {
  console.log("error", error);
  return (
    <Section>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-muted-foreground">Oops... something went wrong</p>
        <p className="text-2xl font-bold">
          Error: {error.message ?? "Something went wrong"}
        </p>
        <Button onClick={() => window.location.reload()}>Reload page</Button>
      </div>
    </Section>
  );
}
