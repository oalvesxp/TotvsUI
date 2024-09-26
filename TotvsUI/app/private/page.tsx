import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function PrivatePage() {
  const session = await getServerSession(authOptions)

  if (!session) redirect('/auth/login')

  return (
    <>
      <h1 className="font-semibold text-lg">Private Page</h1>
    </>
  )
}
