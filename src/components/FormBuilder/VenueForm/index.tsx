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
import editVenue from "@/api/actions/EditVenue";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

/**
 * A form component for creating and updating  a venue (for venue managers)
 * @param {Object} props - The component props
 * @param {VenueType} [props.venueData] - Optional existing venue data for updates. If not provided, form will be in create mode
 * @returns {JSX.Element} A form for creating or updating venue information
 */
export default function VenueForm({
  venueData,
  setOpen,
}: {
  venueData?: VenueType;
  setOpen?: (value: boolean) => void;
}) {
  const [images, setImages] = useState<{ url: string; alt?: string }[]>(
    venueData?.media || []
  );
  const [rating, setRating] = useState(venueData?.rating || 0);
  const [loading, setLoading] = useState(false);

  // Get default form values and validation schema
  const values = getDefaultValues(venueData, images);
  const schema = getSchema();

  const router = useRouter();
  /**
   * Handles form submission for both create and update operations
   * @param {FieldValues} data - The form data to be submitted
   */
  const handleSubmit: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
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
      rating: Number(rating),
      price: Number(data.price),
      maxGuests: Number(data.maxGuests),
    };

    if (venueData) {
      const updatedVenue = await editVenue(
        dataToSubmit as VenueType,
        venueData?.id
      );
      if ((updatedVenue as { success: boolean }).success) {
        setOpen?.(false);
        toast({
          title: "Venue updated successfully",
          description: "Your venue has been updated",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to update venue",
          description: "Please try again",
        });
      }
    } else {
      const newVenue = await createVenue(dataToSubmit as VenueType);
      const venueResponse = JSON.parse(newVenue as string);

      if (venueResponse.success) {
        if (venueResponse.data.data) {
          router.push(`/venues/${venueResponse.data.data.id}`);
          toast({
            title: "Venue created successfully",
            description: "Your venue has been created",
          });
        }
      } else {
        toast({
          variant: "destructive",
          title: "Failed to create venue",
          description:
            venueResponse?.error || "Unknown error. Please try again",
        });
      }
    }

    setLoading(false);
  };

  return (
    <FormBuilder
      zodSchema={schema}
      defaultForm={values}
      onSubmit={handleSubmit as SubmitHandler<FieldValues>}
      className="flex flex-col gap-8"
    >
      <VenueDetails />
      <Media images={images} setImages={setImages} />
      <PriceAndCapacity />
      <StarRating rating={rating} setRating={setRating} />
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

      <FormBuilder.Button isSubmitting={loading}>
        {venueData ? "Update venue" : "Create venue"}
      </FormBuilder.Button>
    </FormBuilder>
  );
}
