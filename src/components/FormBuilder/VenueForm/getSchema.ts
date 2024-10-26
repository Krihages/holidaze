import { z } from "zod";

export default function getSchema() {
  return z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    location: z.object({
      address: z.string().optional(),
      city: z.string().optional(),
      zip: z.string().optional(),
      country: z.string().optional(),
      continent: z.string().optional(),
      lat: z.number().optional(),
      lng: z.number().optional(),
    }),
    media: z.array(z.object({ url: z.string(), alt: z.string().optional() })),
    meta: z.object({
      wifi: z.boolean(),
      parking: z.boolean(),
      pets: z.boolean(),
      breakfast: z.boolean(),
    }),
    rating: z.number().min(0).max(5),
    price: z.number().min(0),
  });
}
