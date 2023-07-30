import { z } from 'zod'
import { MobileWhereUniqueInputObjectSchema } from './objects/MobileWhereUniqueInput.schema'

export const MobileFindUniqueSchema = z.object({
  where: MobileWhereUniqueInputObjectSchema
})
