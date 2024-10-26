import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content from "./Content";
import { cn } from "@/lib/utils";

TabsContainer.Content = Content;

type Props = {
  tabs: { value: string; label: string; className?: string }[];
  className?: string;
  children?: React.ReactNode;
};

/* 
Simple tabs component that can be used to switch between different tabs.
*/

export default function TabsContainer({ tabs, className, children }: Props) {
  return (
    <Tabs defaultValue={tabs[0].value} className={cn(className)}>
      <TabsList className="grid w-full grid-cols-2">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={tab.className}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
