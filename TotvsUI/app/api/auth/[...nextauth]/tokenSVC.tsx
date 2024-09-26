import { NextResponse } from 'next/server'

/** Salvando Tokens nos Cookies */
export const TokenSVC = {
  async get(url: string, username: any, password: any) {
    return fetch(
      `${url}?grant_type=password&username=${username}&password=${password}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
  },

  save(res: any, access_token: string, refresh_token: string) {
    res.cookies.set('access_token', access_token, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
    })

    res.cookies.set('refresh_token', refresh_token, {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
    })
  },
}
