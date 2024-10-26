import { TabsContent } from "@/components/ui/tabs";

export default function Content({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <TabsContent value={value} className={className}>
      {children}
    </TabsContent>
  );
}
