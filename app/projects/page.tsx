import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Join-Nextgen",
    description: "Maintenance et supervision du site web et du serveur. Mises à jour et correctifs techniques réguliers.",
    imageSrc: "/nextgen.JPG",
    projectLink: "https://www.join-nextgen.com"
  },
  {
    title: "Portfolio personnel",
    description: "Conception et développement de mon portfolio personnel moderne et réactif. Une vitrine élégante présentant mes projets, compétences et expériences professionnelles.",
    imageSrc: "/portfolio.png",
    projectLink: "https://v0-portfolio-gilt-eight-72.vercel.app/"
  },
  {
    title: "I-Tsika",
    description: "Site web pour le projet I-Tsika, un groupe de développeur freelance, composé d'étudiants passionnés par la création de solutions web innovantes.",
    imageSrc: "/itsika.png",
    projectLink: "https://i-tsika.site/"
  },
  {
    title: "Mamy Foana",
    description: "Site vitrine de Mamy Foana, un centre de référence pour l'épanouissement des enfants neuro-atypiques à Madagascar.",
    imageSrc: "/mamyfoana.png",
    projectLink: "https://mamyfoana.com/"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="section-padding">
        <div className="page-container">
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
                <div key={index} className="hover-lift">
                  <ProjectCard {...project} />
                </div>
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
              <Button asChild className="smooth-transition">
                <Link href="/contact">
                  Contactez-moi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

