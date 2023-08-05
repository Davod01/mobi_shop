import { z } from 'zod';
import { MobileCreateManyInputObjectSchema } from './objects/MobileCreateManyInput.schema';

export const MobileCreateManySchema = z.object({
  data: z.union([
    MobileCreateManyInputObjectSchema,
    z.array(MobileCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
