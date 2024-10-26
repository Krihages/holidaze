import { VenueType } from "@/types/venue";
import FormBuilder from "..";
import { z } from "zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import getDefaultValues from "./getDefaultValues";
import getSchema from "./getSchema";

/* 
this is a form for creating and/or updating a venue ment for the venue manager
create: will be used for creating a new venue (no venueData provided so will default to empty values)
update: will be used for updating a venue that already exists (using venueData as default values)
*/

export default function VenueForm({ venueData }: { venueData?: VenueType }) {
  /* 
  Separate files for getting default values (based on if venueData is provided or not) and the zod schema to make the code more readable.
  */
  const values = getDefaultValues(venueData);
  const schema = getSchema();

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <FormBuilder
      zodSchema={schema}
      defaultForm={values}
      onSubmit={handleSubmit as SubmitHandler<FieldValues>}
    >
      test
    </FormBuilder>
  );
}
