import { MobileDeleteOneSchema } from '~/prisma/generated/schemas'

export default defineEventHandler(async (event) => {
  const parsedQuery: any = getQuery(event)
  if (parsedQuery.id) { parsedQuery.id = parseInt(parsedQuery.id) }

  try {
    const parsedData = MobileDeleteOneSchema.parse({ where: parsedQuery })
    const res = await event.context.prisma.mobile.delete(parsedData).catch((err: any) => {
      return { error: err }
    })

    return res
  } catch (err: any) {
    return { error: err, quer: parsedQuery }
  }
})
