"use client";

import TabsContainer from "@/components/TabsContainer";
import VenueManager from "./VenueManager";
import Customer from "./Customer";
import Form from "./Form";
export default function RegisterForm() {
  return (
    <div className="max-w-lg p-4 sm:p-8 rounded-lg shadow-md">
      <p className=" font-semibold mb-2 text-muted-foreground">Account types</p>
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
