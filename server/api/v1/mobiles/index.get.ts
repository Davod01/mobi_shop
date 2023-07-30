import { useValidatedQuery } from 'h3-zod'
import { mobileParamsSchema } from '~/types/types'

export default defineEventHandler(async (event) => {
  try {
    const params = await useValidatedQuery(event, mobileParamsSchema)
    const take = params.take ? params.take : 15
    const skip = params.page ? take * (params.page - 1) : 0

    const [mobiles, count] = await event.context.prisma.$transaction([
      event.context.prisma.mobile.findMany({
        skip,
        take
      }),
      event.context.prisma.mobile.count()
    ])

    return { params, mobiles, paginate_size: Math.ceil(count / take) }
  } catch (err) {
    return { err }
  }
})
