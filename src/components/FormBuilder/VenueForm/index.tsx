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
import PriceAndCapacity from "./PriceAndCapacity";
import createVenue from "@/api/actions/createVenue";
import { redirect } from "next/navigation";
/* 
this is a form for creating and/or updating a venue ment for the venue manager
create: will be used for creating a new venue (no venueData provided so will default to empty values)
update: will be used for updating a venue that already exists (using venueData as default values)
*/

export default function VenueForm({ venueData }: { venueData?: VenueType }) {
  const [images, setImages] = useState<{ url: string; alt?: string }[]>(
    venueData?.media || []
  );
  const [rating, setRating] = useState(venueData?.rating || 0);
  const [loading, setLoading] = useState(false);

  /* 
  Separate files for getting default values (based on if venueData is provided or not) and the zod schema to make the code more readable.
  */
  const values = getDefaultValues(venueData, images);
  const schema = getSchema();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    const dataToSubmit = {
      name: data.name,
      description: data.description,
      media: images,
      location: {
        address: data.address,
        city: data.city,
        zip: data.zip,
        country: data.country,
      },
      meta: {
        wifi: data.wifi,
        parking: data.parking,
        pets: data.pets,
        breakfast: data.breakfast,
      },
      rating: rating,
      price: data.price,
      maxGuests: data.maxGuests,
    };

    if (venueData) {
      /*   await updateVenue(venueData.id, dataToSubmit); */
    } else {
      const newVenue = await createVenue(dataToSubmit as VenueType);
      console.log(newVenue);
      if ((newVenue as { success: boolean }).success) {
        redirect(`/venue/${(newVenue as { data: VenueType }).data.id}`);
      }
    }

    setLoading(false);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-xl ">
      <h1 className="text-2xl font-bold mb-4">
        {venueData ? "Update venue" : "Create new venue"}
      </h1>
      <FormBuilder
        zodSchema={schema}
        defaultForm={values}
        onSubmit={handleSubmit as SubmitHandler<FieldValues>}
        className="flex flex-col gap-8"
      >
        <VenueDetails />
        <Media images={images} setImages={setImages} />
        <PriceAndCapacity />
        <Amenities
          amenities={{
            wifi: values.wifi,
            pets: values.pets,
            breakfast: values.breakfast,
          }}
        />

        <Location
          location={{
            address: values.address,
            city: values.city,
            zip: values.zip,
            country: values.country,
          }}
        />
        <StarRating rating={rating} setRating={setRating} />

        <FormBuilder.Button isSubmitting={loading}>
          {venueData ? "Update venue" : "Create venue"}
        </FormBuilder.Button>
      </FormBuilder>
    </div>
  );
}
