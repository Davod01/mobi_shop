import { Prisma } from '@prisma/client'
import { MobileCreateInputObjectSchema } from '~/prisma/generated/schemas'

export default defineEventHandler(async (event) => {
  const parsedBody = await readBody(event)
  try {
    const parsedData = MobileCreateInputObjectSchema.parse(parsedBody)
    const mobileRes = await event.context.prisma.mobile.create({ data: parsedData }).catch((err: any) => {
      return { error: err.meta }
    })

    return mobileRes
  } catch (err: any) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw createError({ statusMessage: err.code, message: err.message })
    }
    if (err instanceof Error) {
      throw createError({ message: err.message })
    }
    throw err
  }
})
