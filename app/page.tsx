"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('recent-work')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">{/* Navigation supprimée pour éviter la duplication avec layout.tsx */}

      <main>
        {/* Hero Section */}
        <section className="section-padding">
          <div className="page-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">ANDRIANTSOA A. Manjaka</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Bienvenue sur mon portfolio !</h2>
                <p className="text-gray-700 mb-8">
                  Étudiant en informatique, je suis passionné par le développement d'applications et de
                  sites web. J'aime concevoir des projets utiles, apprendre de nouvelles technologies et progresser à
                  travers chaque expérience. Ce site présente quelques-uns de mes travaux, mes compétences, et mon
                  univers. Bonne exploration !
                </p>
                <Button onClick={scrollToProjects} className="group smooth-transition">
                  Commençons
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative h-80 md:h-96">
                <Image
                  src="/profile.jpg"
                  alt="ANDRIANTSOA A. Manjaka"
                  fill
                  className="object-cover rounded-lg hover-lift"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section id="recent-work" className="bg-gray-50 section-padding">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Découvrez mes projets récents</h2>
              <p className="text-gray-700 mb-4">Je résous des problèmes utilisateurs et business depuis plus de 15 ans.</p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Chaque projet est conçu pour résoudre des problèmes spécifiques avec des solutions innovantes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="project-card hover-lift">
                <div className="relative h-64">
                  <Image
                    src="/nextgen.JPG"
                    alt="Join-Nextgen"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">Join-Nextgen</h3>
                  <p className="text-gray-700 mb-2">Maintenance et supervision du site web et du serveur. Mises à jour et correctifs techniques réguliers.</p>
                  <p className="text-gray-600 mb-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PHP</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                  </p>
                  <a href="https://www.join-nextgen.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group smooth-transition">
                      Visiter le site
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="project-card hover-lift">
                <div className="relative h-64">
                  <Image
                    src="/portfolio.png"
                    alt="Portfolio personnel"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">Portfolio personnel</h3>
                  <p className="text-gray-700 mb-2">Conception et développement de mon portfolio personnel moderne et réactif. Une vitrine élégante présentant mes projets, compétences et expériences professionnelles.</p>
                  <p className="text-gray-600 mb-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Next.js</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TypeScript</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwind CSS</span>
                  </p>
                  <a href="https://v0-portfolio-gilt-eight-72.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group smooth-transition">
                      Visiter le site
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="project-card hover-lift">
                <div className="relative h-64">
                  <Image
                    src="/itsika.png"
                    alt="I-Tsika"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">I-Tsika</h3>
                  <p className="text-gray-700 mb-2">Site web pour le projet I-Tsika, un groupe de développeur freelance, composé d'étudiants passionnés par la création de solutions web innovantes.</p>
                  <p className="text-gray-600 mb-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReactJS</span>
                  </p>
                  <a href="https://i-tsika.site/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group smooth-transition">
                      Visiter le site
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="project-card hover-lift">
                <div className="relative h-64">
                  <Image
                    src="/mamyfoana.png"
                    alt="Mamy Foana"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-6 bg-white rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">Mamy Foana</h3>
                  <p className="text-gray-700 mb-2">Site vitrine de Mamy Foana, un centre de référence pour l'épanouissement des enfants neuro-atypiques à Madagascar.</p>
                  <p className="text-gray-600 mb-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vite.js</span>
                  </p>
                  <a href="https://mamyfoana.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group smooth-transition">
                      Visiter le site
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="page-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contactez-moi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question concernant mes services et réalisations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg smooth-transition hover:bg-gray-100">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-600">+261 38 07 704 36</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg smooth-transition hover:bg-gray-100">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">mandriantso@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg smooth-transition hover:bg-gray-100">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-600">Lot B 37ter Andafiavaratra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
