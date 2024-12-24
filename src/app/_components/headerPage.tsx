import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'

type HeaderPageProps = {
  title: string
  buttonText: string
  buttonLink: string
}

export default function HeaderPage({
  title,
  buttonText,
  buttonLink,
}: HeaderPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center justify-end gap-2">
        <Link href={buttonLink} className="w-fit justify-end">
          <Button
            variant="outline"
            className="w-fit justify-start gap-2 text-black"
          >
            <PlusIcon className="w-4 h-4" />
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  )
}
