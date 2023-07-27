import { router } from '../trpc'
import { mobileRoute } from './mobileRoute'

export const appRouter = router({
  mobiles: mobileRoute
})

// export type definition of API
export type AppRouter = typeof appRouter
