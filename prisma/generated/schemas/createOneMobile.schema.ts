import { z } from 'zod';
import { MobileCreateInputObjectSchema } from './objects/MobileCreateInput.schema';
import { MobileUncheckedCreateInputObjectSchema } from './objects/MobileUncheckedCreateInput.schema';

export const MobileCreateOneSchema = z.object({
  data: z.union([
    MobileCreateInputObjectSchema,
    MobileUncheckedCreateInputObjectSchema,
  ]),
});
