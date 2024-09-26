import {
  NextAuthMiddlewareOptions,
  NextRequestWithAuth,
  withAuth,
} from 'next-auth/middleware'

const middleware = (req: NextRequestWithAuth) => {
  console.log('[MIDDLEWARE_NEXT]', req.nextauth)
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: '/private',
}
