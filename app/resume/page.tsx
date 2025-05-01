import { Code, Database, Server, Settings, Users, FileText, Phone, Mail, MapPin, Globe } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white p-6 md:p-8">
          <h1 className="text-3xl font-bold">ANDRIANTSOA Andrivola Manjaka</h1>
          <p className="mt-2 text-gray-300">Étudiant en deuxième année d'informatique</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
          {/* Left Column - Contact & Skills */}
          <div className="space-y-8">
            {/* Contact */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">CONTACT</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <span>+261 38 07 704 36</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span>mandriantso@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-600" />
                  <span>Lot B 37ter Andafiavaratra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <span>manjaka-portfolio.vercel.app</span>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">COMPÉTENCES</h2>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Code className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Développement logiciel</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Code className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Développement web full-stack</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Database className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Gestion de bases de données</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Server className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Déploiement et gestion de site web</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Settings className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Administration système</span>
                </li>
                <li className="flex items-start space-x-2">
                  <FileText className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Gestion de projets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Users className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Travail en équipe</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Users className="h-4 w-4 text-gray-600 mt-1" />
                  <span>Gestion de personnes et logistique</span>
                </li>
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">LANGUES</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Malagasy</span>
                  <span className="font-medium">Natif</span>
                </li>
                <li className="flex justify-between">
                  <span>Français</span>
                  <span className="font-medium">Bilingue</span>
                </li>
                <li className="flex justify-between">
                  <span>Anglais</span>
                  <span className="font-medium">Conversationnel</span>
                </li>
              </ul>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">CENTRES D'INTÉRÊT</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Natation</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Lecture</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Randonnée</span>
              </div>
            </section>
          </div>

          {/* Right Column - Profile, Experience, Education */}
          <div className="md:col-span-2 space-y-8">
            {/* Profile */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">PROFIL</h2>
              <p className="text-gray-700">
                Curieux et rigoureux, je développe des solutions logicielles et web fiables et performantes. De la
                conception à la mise en production, je m'engage à offrir des projets utiles, évolutifs et bien
                structurés.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">EXPÉRIENCES PROFESSIONNELLES</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Administrateur Web et Système</h3>
                      <p className="text-gray-600">Join-Nextgen - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2025</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Maintenance et supervision du site web et du serveur.</li>
                    <li>Mises à jour et correctifs techniques réguliers.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Boursier AccèsEducation</h3>
                      <p className="text-gray-600">Accèsbanque - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2024</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Participation à des ateliers.</li>
                    <li>Participation à des formations.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Responsable logistique</h3>
                      <p className="text-gray-600">Association TITANIUM - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2017</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Gestion de la logistique avant et durant les événements.</li>
                    <li>Accompagnement des jeunes lors de l'événement.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">FORMATIONS</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Licence en développement</h3>
                      <p className="text-gray-600">IT University - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2023-2026</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Baccalauréat</h3>
                      <p className="text-gray-600">ESCO La Columba - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2023</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">COMPÉTENCES TECHNIQUES</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Langages de programmation</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">C++</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">C#</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Python</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PHP</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Laravel</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">FlightPHP</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">CodeIgniter</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">SpringMVC</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Django</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bases de données</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">MySQL/MariaDB</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">SQLite</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Oracle Database</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
