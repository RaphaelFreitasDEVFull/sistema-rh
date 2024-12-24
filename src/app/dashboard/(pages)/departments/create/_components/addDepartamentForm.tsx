'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Form from 'next/form'
import { useActionState } from 'react'
import { addDepartment } from '../actions/addDepartament'
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { User } from '@prisma/client'

export default function AddDepartmentForm({
  managers,
}: {
  managers: {
    id: number
    firstName: string | null
    lastName: string | null
  }[]
}) {
  const [state, formAction, isPending] = useActionState(addDepartment, null)

  return (
    <Form action={formAction} className="flex flex-col gap-4 w-full mt-4">
      {state?.success && <p className="text-green-500">{state.message}</p>}
      {state?.success === false && (
        <p className="text-red-500">{state.message}</p>
      )}
      <div className="flex flex-col gap-2">
        <Label>Nome do Departamento</Label>
        <Input placeholder="Nome do Departamento" name="name" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Gerente do Departamento</Label>
        <Select name="managerId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um gerente" />
          </SelectTrigger>
          <SelectContent>
            {managers.map((manager) => (
              <SelectItem key={manager.id} value={manager.id.toString()}>
                {manager.firstName} {manager.lastName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" disabled={isPending} variant="outline">
        {isPending ? 'Adicionando...' : 'Adicionar'}
      </Button>
    </Form>
  )
}
