export async function UserSVC(url, access_token) {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (!res.ok) throw new Error('Não foi possível validar o usuário')

  return res.json()
}
