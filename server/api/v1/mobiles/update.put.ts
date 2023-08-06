import { Prisma } from '@prisma/client'
import { MobileUpdateOneSchema } from '~/prisma/generated/schemas'

export default defineEventHandler(async (event) => {
  const parsedBody = await readBody(event)
  const parsedQuery: any = getQuery(event)
  if (parsedQuery.id) { parsedQuery.id = parseInt(parsedQuery.id) }

  try {
    const parsedData = MobileUpdateOneSchema.parse({ where: parsedQuery, data: parsedBody })
    const mobile = await event.context.prisma.mobile.update({
      where: parsedData.where,
      data: parsedData.data
    }).catch((err: any) => {
      return { error: err.meta }
    })
    return mobile
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
