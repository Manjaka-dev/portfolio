import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-16 px-4 md:px-6">
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Mes Projets</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez mes projets récents. Chaque projet est conçu pour résoudre des problèmes spécifiques avec des
              solutions innovantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vous avez un projet en tête ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Je suis toujours à la recherche de nouveaux défis et opportunités de collaboration. N'hésitez pas à me
              contacter pour discuter de votre projet.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contactez-moi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageSrc: string
  projectLink?: string
}

function ProjectCard({ title, description, tags, imageSrc, projectLink }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index}>
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        {projectLink ? (
          <Button className="w-full group" asChild>
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              Visiter le site
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        ) : (
          <Button className="w-full group">
            Voir le projet
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

const projects = [
  {
    title: "Join-Nextgen",
    description:
      "Maintenance et supervision du site web et du serveur de Join-Nextgen avec mise en place d'une solution robuste pour la gestion des contenus.",
    tags: ["PHP", "Laravel", "MySQL", "Administration Web"],
    imageSrc: "/nextgen.JPG",
    projectLink: "https://www.join-nextgen.com"
  },
  {
    title: "Portfolio personnel",
    description: "Conception et développement de mon portfolio personnel moderne et réactif. Une vitrine élégante présentant mes projets, compétences et expériences professionnelles.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel", "Responsive Design", "UI/UX"],
    imageSrc: "/portfolio.png",
    projectLink: "https://v0-portfolio-gilt-eight-72.vercel.app/"
  },
  {
    title: "Projet en cours",
    description: "Un nouveau projet passionnant en cours de développement. Plus de détails prochainement.",
    tags: ["En développement"],
    imageSrc: "/placeholder.jpg",
  }
]
