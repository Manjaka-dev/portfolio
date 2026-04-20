import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Settings, Users, FileText, BookOpen } from "lucide-react"
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
                Développeur full-stack orienté logiciel, je conçois et développe des applications performantes en
                m'appuyant sur une solide base en Java, ainsi qu'une expérience en développement web avec React et
                Spring. À l'aise aussi bien sur le backend que sur l'architecture globale, je m'intéresse
                particulièrement aux systèmes distribués et aux applications temps réel. Actuellement étudiant en
                informatique et chef de projet sur une application de gestion de production, je travaille sur des
                solutions concrètes en équipe, avec une attention particulière portée à la structure, la
                maintenabilité et l'évolutivité des projets. Curieux et polyvalent, j'explore également le
                développement en C++ et Swift afin d'élargir mes compétences vers des domaines plus systèmes et
                applicatifs.
              </p>
              <div className="flex space-x-4">
                <Button asChild>
                  <a href="/cv.pdf" download>Télécharger CV</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contactez-moi</Link>
                </Button>
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

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">TECHNOLOGIES</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">ReactJS</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">VueJS</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Java</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Spring Boot</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">C++</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Laravel</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Django</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PHP</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">MySQL/MariaDB</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">SQLite</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Oracle</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Firebase</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Git/GitHub</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Docker</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Linux</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Vercel</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">cPanel</span>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">EXPÉRIENCES PROFESSIONNELLES</h2>
          <div className="space-y-6">
            <ExperienceCard
              title="Administrateur Web et Système"
              company="Join-Nextgen - Antananarivo"
              period="2024-2025"
              description={[
                "Maintenance et supervision du site web et du serveur.",
                "Mises à jour et correctifs techniques réguliers.",
                "1 site géré.",
                "1000+ utilisateurs supportés.",
                "cPanel utilisé comme outil principal.",
              ]}
            />
            <ExperienceCard
              title="Boursier AccèsEducation"
              company="Accèsbanque - Antananarivo"
              period="2024-2026"
              description={[
                "Participation à des ateliers.",
                "Participation à des formations.",
                "10 ateliers au total.",
                "Thèmes abordés : soft skills, psychologie et gestion d'équipe.",
                "20 personnes accompagnées.",
                "Pas de projet pratique réalisé.",
              ]}
            />
            <ExperienceCard
              title="Développeur freelance"
              company="I-Tsika - Antananarivo"
              period="2025-2026"
              description={[
                "Gestion de projet conception et développement d'applications.",
                "Gestion de relation client.",
                "2 projets réalisés.",
                "Stack utilisée : React, Spring Boot et C++.",
                "Encadrement de 3 junior developers.",
              ]}
            />
            <ExperienceCard
              title="Responsable logistique"
              company="Association TITANIUM - Antananarivo"
              period="2021-2025"
              description={[
                "Gestion de la logistique avant et durant les événements.",
                "Accompagnement des jeunes lors de l'événement.",
                "10+ événements organisés.",
                "50 à 150 participants par événement.",
                "Événements de type associatif.",
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">FORMATIONS</h2>
          <div className="space-y-6">
            <EducationCard
              degree="Licence en informatique"
              school="IT University - Antananarivo"
              period="2023 - 2026"
              details={[
                "Moyenne générale : 10",
                "Projets majeurs : application de gestion de production de fromage (Spring Boot et React), mini framework web (Java), mini logiciel de FTP (Java), application de signalement d'obstacle routier (VueJS)",
                "Compétences académiques : conception orienté objet, architecture logicielle, databases relationnelles, databases design, web design, web development, sécurité informatique, système d'exploitation, gestion de projet",
              ]}
            />
            <EducationCard
              degree="Baccalauréat"
              school="ESCO La Columba - Antananarivo"
              period="2023"
              details={["Mention : sans mention", "Moyenne : 10"]}
            />
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
  details,
}: {
  degree: string
  school: string
  period: string
  details?: string[]
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
        {details && details.length > 0 ? (
          <ul className="list-disc pl-5 mt-4 space-y-1">
            {details.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
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
