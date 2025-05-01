import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Settings, Users, FileText, BookOpen, Heart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto py-16 px-4 md:px-6">
        {/* Profile Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/profile.jpg"
                alt="ANDRIANTSOA A. Manjaka"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6">ANDRIANTSOA A. Manjaka</h1>
              <h2 className="text-2xl font-semibold mb-4">PROFIL</h2>
              <p className="text-gray-700 mb-8">
                Curieux et rigoureux, je développe des solutions logicielles et web fiables et performantes. De la
                conception à la mise en production, je m'engage à offrir des projets utiles, évolutifs et bien
                structurés.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <a href="/cv.pdf" download>Télécharger CV</a>
                </Button>
                <Button variant="outline">Contactez-moi</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">COMPÉTENCES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <SkillCard icon={<Code />} title="Développement logiciel" />
            <SkillCard icon={<Code />} title="Développement web full-stack" />
            <SkillCard icon={<Database />} title="Gestion de bases de données" />
            <SkillCard icon={<Server />} title="Déploiement et gestion de site web" />
            <SkillCard icon={<Settings />} title="Administration système" />
            <SkillCard icon={<FileText />} title="Gestion de projets" />
            <SkillCard icon={<Code />} title="Utilisation d'outils collaboratifs" />
            <SkillCard icon={<Users />} title="Travail en équipe" />
            <SkillCard icon={<Users />} title="Gestion de personnes et logistique" />
            <SkillCard icon={<BookOpen />} title="Adaptabilité et apprentissage continu" />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">EXPÉRIENCES PROFESSIONNELLES</h2>
          <div className="space-y-6">
            <ExperienceCard
              title="Administrateur Web et Système"
              company="Join-Nextgen - Antananarivo"
              period="2025"
              description={[
                "Maintenance et supervision du site web et du serveur.",
                "Mises à jour et correctifs techniques réguliers.",
              ]}
            />
            <ExperienceCard
              title="Boursier AccèsEducation"
              company="Accèsbanque - Antananarivo"
              period="2024"
              description={["Participation à des ateliers.", "Participation à des formations."]}
            />
            <ExperienceCard
              title="Responsable logistique"
              company="Association TITANIUM - Antananarivo"
              period="2017"
              description={[
                "Gestion de la logistique avant et durant les événements.",
                "Accompagnement des jeunes lors de l'événement.",
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">FORMATIONS</h2>
          <div className="space-y-6">
            <EducationCard
              degree="Licence en développement"
              school="IT University - Antananarivo"
              period="2023 - 2026"
            />
            <EducationCard degree="Baccalauréat" school="ESCO La Columba - Antananarivo" period="2023" />
          </div>
        </section>

        {/* Languages Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">LANGUES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <LanguageCard language="MALAGASY" level="NATIF" />
            <LanguageCard language="FRANCAIS" level="BILINGUE" />
            <LanguageCard language="ANGLAIS" level="CONVERSATIONNEL" />
          </div>
        </section>

        {/* Interests Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">CENTRES D'INTÉRÊT</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <InterestCard icon={<Heart />} title="Natation" />
            <InterestCard icon={<BookOpen />} title="Lecture" />
            <InterestCard icon={<Heart />} title="Randonnée" />
          </div>
        </section>
      </main>
    </div>
  )
}

function SkillCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </CardContent>
    </Card>
  )
}

function ExperienceCard({
  title,
  company,
  period,
  description,
}: {
  title: string
  company: string
  period: string
  description: string[]
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{company}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{period}</span>
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-1">
          {description.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function EducationCard({
  degree,
  school,
  period,
}: {
  degree: string
  school: string
  period: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-xl font-semibold">{degree}</h3>
            <p className="text-gray-600">{school}</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{period}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function LanguageCard({ language, level }: { language: string; level: string }) {
  return (
    <Card>
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{language}</h3>
        <p className="text-gray-600">{level}</p>
      </CardContent>
    </Card>
  )
}

function InterestCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </CardContent>
    </Card>
  )
}
