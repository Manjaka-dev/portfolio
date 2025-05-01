import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ProjectCard({ title, description, imageSrc }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button variant="outline" className="group">
          En savoir plus
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </CardContent>
    </Card>
  )
}

<ProjectCard
  title="Join-Nextgen"
  description="Maintenance et supervision du site web et du serveur. Mises à jour et correctifs techniques réguliers."
  imageSrc="/nextgen.JPG"
/>
