import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  name: string
  imageSrc: string
}

export function TestimonialCard({ quote, name, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="relative h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-gray-700 mb-4">{quote}</p>
            <p className="font-semibold">{name}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
