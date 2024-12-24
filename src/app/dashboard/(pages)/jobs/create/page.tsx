import { AddJobForm } from './_component/addJobForm'

export default function JobsCreatePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Adicionar Cargo</h1>
      <AddJobForm />
    </div>
  )
}
