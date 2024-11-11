import Checkbox from "@/components/Checkbox";
import { Dispatch } from "react";
import { AmenitiesState, AmenitiesAction } from "@/types/filter";

type AmenitiesProps = {
  state: AmenitiesState;
  dispatch: Dispatch<AmenitiesAction>;
};
/* 
    This component is used to display the amenities and allow the user to filter by amenities
*/
export default function Amenities({ state, dispatch }: AmenitiesProps) {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="text-black font-semibold">Amenities</p>
      <div className="grid grid-cols-2 gap-2">
        <Checkbox
          text="Wifi"
          checked={state.amenities.wifi}
          onCheckedChange={(checked) =>
            dispatch({
              type: "amenities",
              payload: { ...state.amenities, wifi: checked },
            })
          }
        />
        <Checkbox
          text="Parking"
          checked={state.amenities.parking}
          onCheckedChange={(checked) =>
            dispatch({
              type: "amenities",
              payload: { ...state.amenities, parking: checked },
            })
          }
        />
        <Checkbox
          text="Breakfast"
          checked={state.amenities.breakfast}
          onCheckedChange={(checked) =>
            dispatch({
              type: "amenities",
              payload: { ...state.amenities, breakfast: checked },
            })
          }
        />
        <Checkbox
          text="Pet"
          checked={state.amenities.pet}
          onCheckedChange={(checked) =>
            dispatch({
              type: "amenities",
              payload: { ...state.amenities, pet: checked },
            })
          }
        />
      </div>
    </div>
  );
}
