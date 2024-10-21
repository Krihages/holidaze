import { CheckmarkIcon, XMarkIcon } from "@/components/icons";

type Facilities = {
  wifi: boolean;
  pets: boolean;
  parking: boolean;
  breakfast: boolean;
};

export default function Facilities({ facilities }: { facilities: Facilities }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Facilities</h2>
      <div>
        <div className="flex items-center gap-2">
          {facilities.wifi ? <CheckmarkIcon /> : <XMarkIcon />}
          <p>Wifi</p>
        </div>
        <div className="flex items-center gap-2">
          {facilities.pets ? (
            <CheckmarkIcon color="success" />
          ) : (
            <XMarkIcon color="destructive" />
          )}
          <p>Pet friendly</p>
        </div>
        <div className="flex items-center gap-2">
          {facilities?.parking ? <CheckmarkIcon /> : <XMarkIcon />}
          <p>Parking</p>
        </div>
        <div className="flex items-center gap-2">
          {facilities?.breakfast ? <CheckmarkIcon /> : <XMarkIcon />}
          <p>Breakfast</p>
        </div>
      </div>
    </div>
  );
}
