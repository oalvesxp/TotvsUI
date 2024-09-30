'use client'

import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    })

    if (res?.error) {
      setError('Usuário e/ou senha inválidos')
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <>
      <div className="flex justify-center flex-col items-center">
        {/* Cabeçalho */}
        <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              src="/logo.svg"
              width={0}
              height={0}
              alt="Totvs"
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl leading-9 tracking-tight text-gray-600">
              Bem-vindo ao Protheus!
            </h2>

            {error && (
              <span className="w-full mt-4 inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                {error}
              </span>
            )}
            {/* Formulário */}
            <div className="mt-6 sm:mx-auto sm:w-full lg:w-72">
              <form onSubmit={handleSubmit} method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Insira seu usuário
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Ex: sp01\nome.sobrenome"
                      autoComplete="username"
                      required
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0089cc] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Insira sua senha
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0089cc] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-[#0089cc] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#006799] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0089cc]"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            </div>

            {/* Rodapé */}
            <p className="mt-10 text-center text-sm text-gray-500">
              Precisa de ajuda?{' '}
              <a
                href="https://signus.freshservice.com/support/tickets/new"
                target="_blank"
                className="font-semibold leading-6 text-[#0089cc] hover:text-[#006799]"
              >
                Ticket
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
