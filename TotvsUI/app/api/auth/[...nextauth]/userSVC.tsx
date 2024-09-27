export const userSVC = {
  async get(access_token: any) {
    return fetch(`${process.env.TOTVS_API_URL}/api/framework/v1/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  },
}
