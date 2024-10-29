import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content from "./Content";
import { cn } from "@/lib/utils";

TabsContainer.Content = Content;

type Props = {
  tabs: { value: string; label: string; className?: string }[];
  className?: string;
  children?: React.ReactNode;
};

/**
 * Simple tabs component that can be used to switch between different tabs.
 * @param {Object} props - The component props
 * @param {Array} props.tabs - Array of tab objects containing value, label, and optional className
 * @param {string} [props.className] - Additional CSS classes to apply to the TabsContainer
 * @param {React.ReactNode} [props.children] - The content to be displayed within the TabsContainer
 * @returns {JSX.Element} A tabs component with triggers and content area
 */
export default function TabsContainer({
  tabs,
  className,
  children,
}: Props): JSX.Element {
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
