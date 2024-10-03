import {
  NextAuthMiddlewareOptions,
  NextRequestWithAuth,
  withAuth,
} from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const middleware = (req: NextRequestWithAuth) => {
  return NextResponse.next()
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: ['/dashboard'],
}
