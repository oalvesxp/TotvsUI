'use client'

import { useSession } from 'next-auth/react'

export default function PublicPage() {
  const { data: session } = useSession()

  return (
    <>
      <div className="max-w-full content-center px-[100px]">
        <h1 className="font-semibold text-lg text-center">Public Page</h1>

        <pre className="bg-slate-900 text-slate-50 p-5 sm:p-8 lg:p-10 rounded-lg mt-10  overflow-x-auto break-words whitespace-pre-wrap">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </>
  )
}
