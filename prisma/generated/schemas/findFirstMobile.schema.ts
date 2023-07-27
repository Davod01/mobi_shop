import { z } from 'zod';
import { MobileOrderByWithRelationInputObjectSchema } from './objects/MobileOrderByWithRelationInput.schema';
import { MobileWhereInputObjectSchema } from './objects/MobileWhereInput.schema';
import { MobileWhereUniqueInputObjectSchema } from './objects/MobileWhereUniqueInput.schema';
import { MobileScalarFieldEnumSchema } from './enums/MobileScalarFieldEnum.schema';

export const MobileFindFirstSchema = z.object({
  orderBy: z
    .union([
      MobileOrderByWithRelationInputObjectSchema,
      MobileOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MobileWhereInputObjectSchema.optional(),
  cursor: MobileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MobileScalarFieldEnumSchema).optional(),
});
