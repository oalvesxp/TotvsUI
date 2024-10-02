'use client'

import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(false)
  }

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Docs', href: '/public' },
  ]

  if (pathname.startsWith('/prt')) return <></>

  return (
    <nav className="bg-white font-normal text-[#363636] p-4 md:border-b-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              onClick={() => setIsOpen(false)}
              src="/logo-dark.svg"
              width={0}
              height={0}
              alt="Totvs"
              className="h-6 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu and Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-[#006799] ${
                pathname === item.href ? 'text-[#0089cc]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button onClick={toggleMenu}>
            <Link href="/auth">
              <Mail className="mr-2 h-4 w-4" />
              Iniciar sessão
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none mobile-menu-button"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="#006799"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Unified Menu (Mobile & Desktop) */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 mt-8">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <Link
                  onClick={toggleMenu}
                  href={item.href}
                  className={`hover:text-[#006799] block ${
                    pathname === item.href
                      ? 'text-[#0089cc] font-semibold bg-gray-200 rounded-sm py-2'
                      : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="w-full">
              <Link href="/auth">
                <button
                  onClick={toggleMenu}
                  className="flex items-center justify-center text-white bg-[#0089cc] hover:bg-[#006799] py-2 px-4 rounded w-full"
                >
                  Login
                  <svg
                    className="ml-2 w-4 h-4 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    ></path>
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
