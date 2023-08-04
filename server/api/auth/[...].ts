import CredentialsProvider from 'next-auth/providers/credentials'
// import { PrismaAdapter } from '@auth/prisma-adapter'
import { NuxtAuthHandler } from '#auth'
import prisma from '~/server/db/prisma'
import { UserCredentional } from '~/types/types'

export default NuxtAuthHandler({
  // TODO: SET A STRONG SECRET, SEE https://sidebase.io/nuxt-auth/configuration/nuxt-auth-handler#secret
  secret: process.env.AUTH_SECRET,

  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
    // error: '/error'
  },

  // adapter: PrismaAdapter(prisma),

  // ... remainder of your config ...
  callbacks: {
    // Callback when the JWT is created / updated, see https://next-auth.js.org/configuration/callbacks#jwt-callback
    jwt: ({ token, user }) => {
      if (user) {
        token.jwt = user ? (user as any).access_token || '' : ''
        token.id = user ? user.id || '' : ''
        token.isAdmin = user ? (user as any).isAdmin || '' : ''
        token.isActive = user ? (user as any).isActive || '' : ''
      }
      return Promise.resolve(token)
    },
    // Callback whenever session is checked, see https://next-auth.js.org/configuration/callbacks#session-callback
    session: ({ session, token }) => {
      (session as any).isAdmin = token.isAdmin;
      (session as any).isActive = token.isActive;
      (session as any).uid = token.id
      return Promise.resolve(session)
    }
  },

  // TODO: ADD YOUR OWN AUTHENTICATION PROVIDER HERE, READ THE DOCS FOR MORE: https://sidebase.io/nuxt-auth
  providers: [

    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: '(hint: leon)' },
        password: { label: 'password', type: 'password', placeholder: '(hint: hunter2)' }
      },
      async authorize (credentials: any) {
        try {
          const ParsedData = UserCredentional.parse(credentials)
          const user = await prisma.user.findUniqueOrThrow({
            where: {
              email: ParsedData.email
            }
          })
          if (user.password !== ParsedData.password) {
            throw createError({ statusCode: 400, message: 'password is invalid' })
          }

          return user
        } catch (err: any) {
          console.warn('error => ')
          return err
        }
      }
    })
  ]
})
