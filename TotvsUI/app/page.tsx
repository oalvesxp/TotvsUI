'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Dashboard() {
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
    <main className="h-full">
      <div className="w-full h-full xl:grid lg:min-h-[400px] xl:grid-cols-2 xl:min-h-[600px]">
        <div className="h-full flex items-center justify-center py-12">
          <form onSubmit={handleSubmit}>
            <div className="mx-auto grid w-[340px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                <p className="text-balance text-muted-foreground">
                  Insira seu usuário e senha do Protheus para acessar o sistema.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">Usuário</Label>
                  <Input
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    type="text"
                    placeholder="Ex: sp01\nome.sobrenome"
                    autoComplete="username"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Esqueceu sua senha?
                    </Link>
                  </div>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Entrar
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Precisa de ajuda?{' '}
                <Link
                  href="https://signus.freshservice.com/support/tickets/new"
                  className="underline"
                >
                  Ticket
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden bg-muted xl:block">
          <Image
            src="/model.png"
            alt="Image"
            width="1920"
            height="1080"
            priority
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </main>
  )
}
