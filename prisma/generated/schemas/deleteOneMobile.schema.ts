import { z } from 'zod';
import { MobileWhereUniqueInputObjectSchema } from './objects/MobileWhereUniqueInput.schema';

export const MobileDeleteOneSchema = z.object({
  where: MobileWhereUniqueInputObjectSchema,
});
