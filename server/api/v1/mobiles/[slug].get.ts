// import { MobileWhereUniqueInputObjectSchema } from 'prisma/generated/schemas'
import { z } from 'zod'
import { useValidatedParams } from 'h3-zod'

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
    return { err }
  }
})
