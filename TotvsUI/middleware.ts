import {
  NextAuthMiddlewareOptions,
  NextRequestWithAuth,
  withAuth,
} from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const middleware = (req: NextRequestWithAuth) => {
  const isProtect = req.nextUrl.pathname.startsWith('/prt')
  const almoxRole = req.nextauth.token?.department === 'TI'

  if (isProtect && !almoxRole) {
    return NextResponse.rewrite(new URL('/errors/denied', req.url))
  }
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: ['/prt', '/prt/dashboard', '/prt/almoxarifado'],
}
