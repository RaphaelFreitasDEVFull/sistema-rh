'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Form from 'next/form'
import { useActionState, useEffect } from 'react'
import { loginUser } from '../actions/loginUser'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginUser, null)

  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      router.push('/dashboard')
      router.refresh()
    }
  }, [state])

  return (
    <Form
      action={formAction}
      className="flex flex-col gap-2 w-full max-w-md mt-6"
    >
      <div className="flex flex-col gap-2">
        <Label>Usuário</Label>
        <Input name="username" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Senha</Label>
        <Input name="password" type="password" />
      </div>
      <Button
        type="submit"
        variant="outline"
        className="mt-4 text-black hover:bg-gray-200"
      >
        {isPending ? 'Entrando...' : 'Entrar'}
      </Button>
    </Form>
  )
}
