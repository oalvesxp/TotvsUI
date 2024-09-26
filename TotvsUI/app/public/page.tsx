'use client'

import { useSession } from 'next-auth/react'

export default function PublicPage() {
  const { data: session } = useSession()

  return (
    <>
      <h1 className="font-semibold text-lg">Public Page</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  )
}
