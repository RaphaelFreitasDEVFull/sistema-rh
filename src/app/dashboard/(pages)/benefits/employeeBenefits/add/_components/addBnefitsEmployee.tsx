'use client'

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Benefit, Employee } from '@prisma/client'
import Form from 'next/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useActionState } from 'react'
import { addBenefitsEmployee } from '../actions/addBenefitsEmployee'

export function AddBenefitsEmployeeForm({
  employees,
  benefits,
}: {
  employees: Employee[]
  benefits: Benefit[]
}) {
  const [stete, formAction, isPending] = useActionState(
    addBenefitsEmployee,
    null,
  )
  return (
    <Form action={formAction} className="flex flex-col gap-2">
      {stete?.success && <p className="text-green-500">{stete.message}</p>}
      {stete?.success === false && (
        <p className="text-red-500">{stete.message}</p>
      )}
      <div className="flex flex-col gap-2">
        <Label>Funcionário</Label>
        <Select name="employeeId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um funcionário" />
          </SelectTrigger>
          <SelectContent>
            {employees.map((employee) => (
              <SelectItem value={employee.id.toString()} key={employee.id}>
                {employee.firstName} {employee.lastName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Benefício</Label>
        <Select name="benefitId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um benefício" />
          </SelectTrigger>
          <SelectContent>
            {benefits.map((benefit) => (
              <SelectItem value={benefit.id.toString()} key={benefit.id}>
                {benefit.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Data de Início</Label>
        <Input type="date" name="startDate" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Data de Fim</Label>
        <Input type="date" name="endDate" />
      </div>
      <Button type="submit" className="w-full" variant="outline">
        Adicionar
      </Button>
    </Form>
  )
}
