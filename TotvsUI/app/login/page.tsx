import SiginForm from '../components/SiginFom'
import Image from 'next/image'

export const metadata = {
  title: 'Login',
  description: 'Página de login do TotvsUI',
}

export default function Login() {
  return (
    <>
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

          <SiginForm />

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
