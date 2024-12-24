'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import Form from 'next/form'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import { addBanefy } from '../../actions/addBanefy'

export default function AddBanefyForm() {
  const [state, formAction, isPending] = useActionState(addBanefy, null)

  return (
    <Form action={formAction} className="flex flex-col gap-4 mt-4">
      {state?.success && (
        <p className="text-sm text-green-500">{state.message}</p>
      )}
      {state?.success === false && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
      <p className="text-sm text-gray-500">* Campos obrigatórios</p>
      <div className="flex flex-col gap-2">
        <Label>Nome do Benefício*</Label>
        <Input placeholder="Nome do Benefício" name="name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Descrição</Label>
        <Input placeholder="Descrição do Benefício" name="description" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Valor</Label>
        <Input placeholder="Valor do Benefício" name="amount" type="number" />
      </div>
      <Button type="submit" variant="outline" disabled={isPending}>
        {isPending ? 'Adicionando...' : 'Adicionar'}
      </Button>
    </Form>
  )
}
