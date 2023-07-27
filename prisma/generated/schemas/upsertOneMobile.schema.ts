import { z } from 'zod';
import { MobileWhereUniqueInputObjectSchema } from './objects/MobileWhereUniqueInput.schema';
import { MobileCreateInputObjectSchema } from './objects/MobileCreateInput.schema';
import { MobileUncheckedCreateInputObjectSchema } from './objects/MobileUncheckedCreateInput.schema';
import { MobileUpdateInputObjectSchema } from './objects/MobileUpdateInput.schema';
import { MobileUncheckedUpdateInputObjectSchema } from './objects/MobileUncheckedUpdateInput.schema';

export const MobileUpsertSchema = z.object({
  where: MobileWhereUniqueInputObjectSchema,
  create: z.union([
    MobileCreateInputObjectSchema,
    MobileUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MobileUpdateInputObjectSchema,
    MobileUncheckedUpdateInputObjectSchema,
  ]),
});
