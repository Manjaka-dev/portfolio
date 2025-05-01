import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone, MapPin, Globe } from "lucide-react"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Manjaka</div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="#" className="hover:text-primary">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#recent-work" className="hover:text-primary">
                Projets récents
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Ouvrir menu</span>
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4 md:px-6 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">ANDRIANTSOA A. Manjaka</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Bienvenue sur mon portfolio !</h2>
              <p className="text-gray-700 mb-8">
                Étudiant en deuxième année d'informatique, je suis passionné par le développement d'applications et de
                sites web. J'aime concevoir des projets utiles, apprendre de nouvelles technologies et progresser à
                travers chaque expérience. Ce site présente quelques-uns de mes travaux, mes compétences, et mon
                univers. Bonne exploration !
              </p>
              <Button className="group">
                Commençons
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/profile.jpg"
                alt="ANDRIANTSOA A. Manjaka"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Recent Work Section */}
        <section id="recent-work" className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Découvrez mes projets récents</h2>
              <p className="text-gray-700 mb-4">Je résous des problèmes utilisateurs et business depuis plus de 15 ans.</p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Chaque projet est conçu pour résoudre des problèmes spécifiques avec des solutions innovantes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src="/nextgen.JPG"
                    alt="Join-Nextgen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2">Join-Nextgen</h3>
                  <p className="text-gray-700 mb-2">Maintenance et supervision du site web et du serveur. Mises à jour et correctifs techniques réguliers.</p>
                  <p className="text-gray-600 mb-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">PHP</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Laravel</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MySQL</span>
                  </p>
                  <a href="https://www.join-nextgen.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group">
                      Visiter le site
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
              <ProjectCard
                title="Portfolio personnel"
                description="Conception et développement de mon portfolio personnel moderne et réactif. Une vitrine élégante présentant mes projets, compétences et expériences professionnelles."
                imageSrc="/portfolio.png"
                projectLink="https://v0-portfolio-gilt-eight-72.vercel.app/"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contactez-moi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question concernant mes services et réalisations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-600">+261 38 07 704 36</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">mandriantso@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-600">Lot B 37ter Andafiavaratra</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Site web</h3>
                    <p className="text-gray-600">www.reallygreatsite.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">Manjaka</div>
              <p className="mt-2 text-gray-400">
                © {new Date().getFullYear()} ANDRIANTSOA A. Manjaka. Tous droits réservés.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/in/andrivola-manjaka-andriantsoa-086204290" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="https://github.com/Manjaka-dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
