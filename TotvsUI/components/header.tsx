import Link from 'next/link'
import { SignOutButton } from './signout-button'

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
            <SignOutButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
