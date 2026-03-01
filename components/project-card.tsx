import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
  projectLink?: string
}

export function ProjectCard({ title, description, imageSrc, projectLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {projectLink ? (
          <Link href={projectLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group w-full">
              Visiter le projet
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        ) : (
          <Button variant="outline" className="group w-full">
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

