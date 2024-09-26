'use client'

import { useSession } from 'next-auth/react'

export default function PublicPage() {
  const { data: session } = useSession()

  return (
    <>
      <h1 className="font-semibold text-lg">Public Page</h1>
      <pre className="bg-slate-900 text-slate-50 p-10 rounded-lg mt-10">
        {JSON.stringify(session, null, 2)}
      </pre>
    </>
  )
}
