import { z } from 'zod';
import { MobileUpdateInputObjectSchema } from './objects/MobileUpdateInput.schema';
import { MobileUncheckedUpdateInputObjectSchema } from './objects/MobileUncheckedUpdateInput.schema';
import { MobileWhereUniqueInputObjectSchema } from './objects/MobileWhereUniqueInput.schema';

export const MobileUpdateOneSchema = z.object({
  data: z.union([
    MobileUpdateInputObjectSchema,
    MobileUncheckedUpdateInputObjectSchema,
  ]),
  where: MobileWhereUniqueInputObjectSchema,
});
