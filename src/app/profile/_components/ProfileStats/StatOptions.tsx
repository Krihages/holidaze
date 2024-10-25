import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  active: string | null;
  setActive: (tab: string | null) => void;
  items: Item[];
};
type Item = {
  type: "yourBookings" | "venues" | "favorites" | "customerBookings" | null;
  count: number;
  label: string;
};

export default function StatOptions({ active, setActive, items }: Props) {
  useEffect(() => {
    if (active === null) {
      const firstActiveItem = items.find((item) => item.count > 0);
      if (firstActiveItem) {
        setActive(firstActiveItem.type);
      }
    }
  }, [active, items, setActive]);

  return (
    <div className="flex flex-col gap-2 sm:max-w-sm w-full bg-white px-8 py-10 sm:min-h-[500px] mt-20 sm:mt-0">
      {items.map((item) => (
        <StatOption
          key={item.type}
          active={active}
          setActive={setActive}
          item={item}
        />
      ))}
    </div>
  );
}

type ItemProps = {
  active: string | null;
  setActive: (tab: string | null) => void;
  item: Item;
};

function StatOption({ active, setActive, item }: ItemProps) {
  return (
    <Button
      className="w-full shadow-sm py-6 hover:bg-info"
      variant={`${active === item.type ? "info" : "outline"}`}
      onClick={() => setActive(item.type)}
    >
      {item.label} ({item.count})
    </Button>
  );
}
