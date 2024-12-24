'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Employee } from '@prisma/client'
import { Loader2, Minus, Plus } from 'lucide-react'
import Form from 'next/form'
import { useActionState, useState } from 'react'
import { addPerformanceReview } from '../action/addPerformanceReview'

export function AddPerformaceReviewForm({
  employees,
}: {
  employees: Employee[]
}) {
  const [score, setScore] = useState(0)
  const [state, formAction, isPending] = useActionState(
    addPerformanceReview,
    null,
  )

  return (
    <Form action={formAction} className="flex flex-col gap-4 mt-4">
      {state?.success && <p className="text-green-500">{state.message}</p>}
      {state?.success === false && (
        <p className="text-red-500">{state.message}</p>
      )}
      <div className="flex flex-col gap-2">
        <Label>Funcionário</Label>
        <Select name="employeeId">
          <SelectTrigger>
            <SelectValue placeholder="Selecione um funcionário" />
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
        <Label>Data da Avaliação</Label>
        <Input type="date" name="date" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Nota</Label>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => setScore((prev) => (prev > 0 ? prev - 10 : 0))}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <Progress value={score} className="w-full h-2" />
          <Input type="hidden" name="score" value={score} />
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={() => setScore((prev) => (prev < 100 ? prev + 10 : 100))}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-white">{score}</span>
        </div>
        <div className="flex flex-col gap-2">
          <Label>Comentário da Avaliação</Label>
          <Textarea name="comment" className="h-36" />
        </div>
        <Button
          type="submit"
          variant="outline"
          disabled={isPending}
          className="w-full mt-4"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            'Adicionar Avaliação'
          )}
        </Button>
      </div>
    </Form>
  )
}
