import AddBanefyForm from './_components/addBenefyForm'

export default function BenefitsCreatePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Adicionar Benefício</h1>
      <AddBanefyForm />
    </div>
  )
}
