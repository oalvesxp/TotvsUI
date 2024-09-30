import Link from 'next/link'

export const metadata = {
  title: 'Error',
  description: 'Acesso negado',
}

export default async function Almoxarifado() {
  return (
    <>
      <h1 className="font-semibold text-lg py-6">401 - Acesso negado</h1>
      <Link href="/public/">
        <button
          type="button"
          className="text-white bg-[#0089cc] hover:bg-[#006799] focus:ring-2 focus:outline-none focus:ring-[#006799] font-normal rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
        >
          Voltar
        </button>
      </Link>
    </>
  )
}
