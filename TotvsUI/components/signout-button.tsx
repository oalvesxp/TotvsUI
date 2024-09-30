'use client'

import { signOut } from 'next-auth/react'

export const SignOutButton = () => {
  return (
    <>
      <button
        onClick={() => signOut()}
        type="button"
        className="text-white bg-[#0089cc] hover:bg-[#006799] focus:ring-2 focus:outline-none focus:ring-[#006799] font-normal rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
      >
        Logout
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </>
  )
}
