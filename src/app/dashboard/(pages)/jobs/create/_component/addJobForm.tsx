'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Form from 'next/form'
import { useActionState } from 'react'
import { addJob } from '../actions/addJob'

export function AddJobForm() {
  const [state, formAction, isPending] = useActionState(addJob, null)

  return (
    <Form action={formAction} className="flex flex-col gap-4">
      {state?.success && <p className="text-green-500">{state.message}</p>}
      {state?.success === false && (
        <p className="text-red-500">{state.message}</p>
      )}
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Cargo</Label>
        <Input id="title" name="title" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="salaryRangeMin">Salario Minimo</Label>
        <Input id="salaryRangeMin" name="salaryRangeMin" type="number" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="salaryRangeMax">Salario Maximo</Label>
        <Input id="salaryRangeMax" name="salaryRangeMax" type="number" />
      </div>
      <Button type="submit" variant="outline">
        Adicionar
      </Button>
    </Form>
  )
}
