'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  // Redireciona o usuário para o dashboard se ele já estiver logado
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
      router.refresh()
    }
  }, [status, router])

  // Exibe um estado de carregamento enquanto verifica a sessão
  if (status === 'loading' || status === 'authenticated') {
    return <p>Carregando...</p>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    })

    setLoading(false)

    if (res?.error) {
      setError('Usuário e/ou senha inválidos')
      setIsDialogOpen(true)
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
                      href="https://signus.freshservice.com/support/tickets/new"
                      target="_blank"
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
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Carregando...' : 'Entrar'}
                </Button>
              </div>
              {error && (
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-red-600">
                        Usuário e/ou senha inválidos!
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Verifique e tente novamente.
                      </AlertDialogDescription>
                      <AlertDialogDescription>
                        Se você não lembra das suas credenciais clique em
                        "Esqueceu sua senha?"
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction className="bg-red-600 hover:bg-red-600/90">
                        Fechar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
              <div className="mt-4 text-center text-sm">
                Precisa de ajuda?{' '}
                <Link
                  href="https://signus.freshservice.com/support/tickets/new"
                  target="_blank"
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
