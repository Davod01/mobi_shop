// import { MobileWhereUniqueInputObjectSchema } from 'prisma/generated/schemas'
import { Prisma } from '@prisma/client'

export default defineEventHandler(async (event) => {
  try {
    // const fGetRouterParams = await useValidatedParams(event, z.object({ slug: z.string().min(4) }))
    const fGetRouterParams = await getRouterParams(event)
    const slug = decodeURI(fGetRouterParams.slug)

    const mobile = await event.context.prisma.mobile.findUniqueOrThrow({
      where: {
        slug
      }
    })

    return mobile
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      throw createError({ statusMessage: err.code, message: err.message })
    }
    if (err instanceof Error) {
      throw createError({ message: err.message })
    }
    throw err
  }
})
