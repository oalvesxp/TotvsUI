import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed w-full h-20 flex items-center bg-gray-900 text-white text-sm">
      <nav className="w-full flex items-center justify-between m-auto max-w-screen-xl sm:px-8">
        <Link href="/">Logo</Link>
        <ul className="flex items-center justify-between gap-10">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/public">Pública</Link>
          </li>
          <li>
            <Link href="/private">Privada</Link>
          </li>
          <li>
            <Link href="/auth/login">
              <button
                type="button"
                className="text-white bg-[#0089cc] hover:bg-[#006799] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
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
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
