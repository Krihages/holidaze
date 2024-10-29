import { z } from "zod";

export default function getSchema() {
  return z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    address: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
    media: z.array(z.object({ url: z.string(), alt: z.string().optional() })),
    wifi: z.boolean(),
    parking: z.boolean(),
    pets: z.boolean(),
    breakfast: z.boolean(),
    rating: z.number().min(0).max(5).optional(),
    price: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().min(1)),
    maxGuests: z
      .string()
      .transform((val) => Number(val))
      .pipe(z.number().min(1)),
  });
}
