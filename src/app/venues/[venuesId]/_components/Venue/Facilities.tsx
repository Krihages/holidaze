import { CheckmarkIcon, XMarkIcon } from "@/components/icons";

type Facilities = {
  wifi: boolean;
  pets: boolean;
  parking: boolean;
  breakfast: boolean;
};

export default function Facilities({ facilities }: { facilities: Facilities }) {
  return (
    <div className="flex flex-col gap-2 py-8 border-b border-gray-400">
      <h2 className="font-semibold">Facilities:</h2>
      <div>
        {Object.entries(facilities).map(([key, value]) => (
          <Facility
            key={key}
            facility={key as keyof Facilities}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}

function Facility({
  facility,
  value,
}: {
  facility: keyof Facilities;
  value: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {value ? (
        <CheckmarkIcon color="success" />
      ) : (
        <XMarkIcon color="destructive" />
      )}
      <p className="text-muted-foreground">{facility}</p>
    </div>
  );
}
