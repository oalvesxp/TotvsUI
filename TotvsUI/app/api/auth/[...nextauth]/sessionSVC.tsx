/** Services API */
export const TokenSVC = {
  async get(username: any, password: any) {
    return fetch(
      `${process.env.TOTVS_API_URL}/api/oauth2/v1/token?grant_type=password&username=${username}&password=${password}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
  },
}

export const UserSVC = {
  async get(access_token: any) {
    return fetch(`${process.env.TOTVS_API_URL}/api/framework/v1/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  },
}
