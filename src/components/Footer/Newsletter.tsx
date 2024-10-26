import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Newsletter() {
  return (
    <div className="flex flex-col gap-2 max-w-sm">
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold ">Newsletter</h4>
        <p>
          Subscribe to our newsletter to get our news & discounts delivered to
          your mailbox.
        </p>
        <div className="flex gap-2">
          <Input
            placeholder="E-mail address..."
            className="border-muted-foreground bg-background"
          />
          <Button variant="primary">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
