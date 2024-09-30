'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SignOutButton } from '../../components/signout-button'
import { usePathname } from 'next/navigation'

export function NavLinks() {
  const pathname = usePathname()

  if (pathname === '/') return <></>

  return (
    <>
      <div className="h-16 flex items-center text-black text-sm mb-10">
        <nav className="w-full flex items-center justify-between m-auto max-w-screen-xl sm:px-8 px-4">
          <Link href="/prt/dashboard">
            <Image
              src="/logo.svg"
              width={0}
              height={0}
              alt="Totvs"
              className="mx-auto h-6 w-auto"
            />
          </Link>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <Link
                className={`link ${
                  pathname === '/prt/dashboard' ? 'active' : ''
                }`}
                href="/prt/dashboard"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className={`link ${pathname === '/public' ? 'active' : ''}`}
                href="/public"
              >
                Pública
              </Link>
            </li>
            <li>
              <Link
                className={`link ${
                  pathname === '/prt/almoxarifado' ? 'active' : ''
                }`}
                href="/prt/almoxarifado"
              >
                Almoxarifado
              </Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
