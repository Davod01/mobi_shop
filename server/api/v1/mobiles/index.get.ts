import { useValidatedQuery } from 'h3-zod'
// import { Prisma } from '@prisma/client'
import { mobileParamsSchema } from '~/types/types'

export default defineEventHandler(async (event) => {
  try {
    const params = await useValidatedQuery(event, mobileParamsSchema)
    const take = params.take ? params.take : 15
    const skip = params.page ? take * (params.page - 1) : 0

    const orderBy: any = {}
    const where: any = {}

    if (params.priceSortBy) {
      orderBy.price = params.priceSortBy
    }
    if (params.minPrice > 1000000 || params.maxPrice < 100000000) {
      const AND = [
        {
          price: { gte: params.minPrice ?? 0 }
        },
        {
          price: { lte: params.maxPrice ?? 100000000 }
        }
      ]
      where.AND = AND
    }

    const [mobiles, count] = await event.context.prisma.$transaction([
      event.context.prisma.mobile.findMany({
        skip,
        take,
        where,
        orderBy
      }),
      event.context.prisma.mobile.count({
        where
      })
    ])

    return { params, mobiles, paginate_size: Math.ceil(count / take) }
  } catch (err) {
    // if (err instanceof Prisma.PrismaClientKnownRequestError) {
    //   throw createError({ statusMessage: err.code, message: err.message })
    // }
    // if (err instanceof Error) {
    //   throw createError({ message: err.message })
    // }
    // throw err
    return JSON.stringify(err)
  }
})
