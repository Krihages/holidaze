"use client";

import { VenueType } from "@/types/venue";
import FormBuilder from "..";

import { FieldValues, SubmitHandler } from "react-hook-form";
import getDefaultValues from "./getDefaultValues";
import getSchema from "./getSchema";
import Media from "./Media";
import { useState } from "react";
import Amenities from "./Amenities";
import Location from "./Location";
import VenueDetails from "./VenueDetails";
import StarRating from "@/components/StarRating";
/* 
this is a form for creating and/or updating a venue ment for the venue manager
create: will be used for creating a new venue (no venueData provided so will default to empty values)
update: will be used for updating a venue that already exists (using venueData as default values)
*/

export default function VenueForm({ venueData }: { venueData?: VenueType }) {
  const [images, setImages] = useState<{ url: string; alt?: string }[]>(
    venueData?.media || []
  );
  const [loading, setLoading] = useState(false);

  /* 
  Separate files for getting default values (based on if venueData is provided or not) and the zod schema to make the code more readable.
  */
  const values = getDefaultValues(venueData, images);
  const schema = getSchema();

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-xl ">
      <h1 className="text-2xl font-bold mb-4">Create new venue</h1>
      <FormBuilder
        zodSchema={schema}
        defaultForm={values}
        onSubmit={handleSubmit as SubmitHandler<FieldValues>}
      >
        <VenueDetails
          name={venueData?.name || ""}
          description={venueData?.description || ""}
        />
        <Media images={images} setImages={setImages} />
        <Amenities amenities={venueData?.meta || {}} />
        <Location location={venueData?.location || {}} />
        <StarRating />
        <FormBuilder.Button isSubmitting={loading}>
          {venueData ? "Update venue" : "Create venue"}
        </FormBuilder.Button>
      </FormBuilder>
    </div>
  );
}
