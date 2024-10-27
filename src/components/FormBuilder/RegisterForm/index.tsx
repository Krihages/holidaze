"use client";

import TabsContainer from "@/components/TabsContainer";
import VenueManager from "./VenueManager";
import Customer from "./Customer";

export default function RegisterForm() {
  return (
    <div className="max-w-lg p-4 sm:px-8 sm:py-10 rounded-lg shadow bg-white text-foreground">
      <p className=" font-semibold mb-2 text-muted-foreground">
        Select account type:
      </p>
      <TabsContainer
        tabs={[
          { value: "customer", label: "Customer" },
          { value: "venue-manager", label: "Venue Manager" },
        ]}
      >
        <TabsContainer.Content value="customer">
          <Customer />
        </TabsContainer.Content>
        <TabsContainer.Content value="venue-manager">
          <VenueManager />
        </TabsContainer.Content>
      </TabsContainer>
    </div>
  );
}

type Tab = { value: string; label: string; className?: string };
