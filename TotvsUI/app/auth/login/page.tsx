'use client'

import Image from 'next/image'

export default function Login() {
  return (
    <>
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

          {/* Formulário */}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="/profile" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Insira seu usuário
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Digite seu usuário"
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
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                    required
                    autoComplete="current-password"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0089cc] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#0089cc] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#006799] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </>
  )
}
