'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Employee } from '@prisma/client'
import Form from 'next/form'
import { useActionState } from 'react'
import { addSalary } from '../actions/addSalary'

export default function SalariesForm({ employees }: { employees: Employee[] }) {
  const [state, formAction, isPending] = useActionState(addSalary, null)

  return (
    <Form action={formAction} className="flex flex-col gap-4 mt-6">
      {state?.success && <p className="text-green-500">{state.message}</p>}
      {state?.success === false && (
        <p className="text-red-500">{state.message}</p>
      )}
      <div className="flex flex-col gap-2">
        <Label>Funcionario</Label>
        <Select name="employeeId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um funcionario" />
          </SelectTrigger>
          <SelectContent>
            {employees.map((employee) => (
              <SelectItem key={employee.id} value={employee.id.toString()}>
                {employee.firstName} {employee.lastName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Salario</Label>
        <Input name="amount" type="number" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Data de Pagamento</Label>
        <Input name="effectiveDate" type="date" />
      </div>
      <Button variant={'outline'} type="submit">
        Adicionar
      </Button>
    </Form>
  )
}
