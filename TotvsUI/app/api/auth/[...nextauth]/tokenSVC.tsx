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
}
