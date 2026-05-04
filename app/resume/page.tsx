import { Code, Database, Server, Settings, Users, FileText, Phone, Mail, MapPin, Globe } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white p-6 md:p-8">
          <h1 className="text-3xl font-bold">ANDRIANTSOA Andrivola Manjaka</h1>
          <p className="mt-2 text-gray-300">Étudiant en informatique</p>
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
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-600" />
                  <span>linkedin.com/in/manjaka-andriantsoa</span>
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

            {/* Certifications */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">CERTIFICATIONS</h2>
              <p className="text-gray-700">Aucune certification pour le moment.</p>
            </section>


          </div>

          {/* Right Column - Profile, Experience, Education */}
          <div className="md:col-span-2 space-y-8">
            {/* Profile */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">PROFIL</h2>
              <p className="text-gray-700">
                Développeur full-stack orienté logiciel, je conçois et développe des applications performantes en
                m’appuyant sur une solide base en Java, ainsi qu’une expérience en développement web avec React et
                Spring. À l’aise aussi bien sur le backend que sur l’architecture globale, je m’intéresse
                particulièrement aux systèmes distribués et aux applications temps réel. Actuellement étudiant en
                informatique et chef de projet sur une application de gestion de production, je travaille sur des
                solutions concrètes en équipe, avec une attention particulière portée à la structure, la
                maintenabilité et l’évolutivité des projets. Curieux et polyvalent, j’explore également le
                développement en C++ et Swift afin d’élargir mes compétences vers des domaines plus systèmes et
                applicatifs.
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
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2024-2025</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Maintenance et supervision du site web et du serveur.</li>
                    <li>Mises à jour et correctifs techniques réguliers.</li>
                    <li>1 site géré.</li>
                    <li>1000+ utilisateurs supportés.</li>
                    <li>cPanel utilisé comme outil principal.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Boursier AccèsEducation</h3>
                      <p className="text-gray-600">Accèsbanque - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2024-2026</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Participation à des ateliers.</li>
                    <li>Participation à des formations.</li>
                    <li>10 ateliers au total.</li>
                    <li>Thèmes abordés : soft skills, psychologie et gestion d'équipe.</li>
                    <li>20 personnes accompagnées.</li>
                    <li>Pas de projet pratique réalisé.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Développeur freelance</h3>
                      <p className="text-gray-600">I-Tsika - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2025-2026</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Gestion de projet conception et développement d'applications.</li>
                    <li>Gestion de relation client.</li>
                    <li>2 projets réalisés.</li>
                    <li>Stack utilisée : React, Spring Boot et C++.</li>
                    <li>Encadrement de 3 junior developers.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Responsable logistique</h3>
                      <p className="text-gray-600">Association TITANIUM - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2021-2025</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-gray-700">
                    <li>Gestion de la logistique avant et durant les événements.</li>
                    <li>Accompagnement des jeunes lors de l'événement.</li>
                    <li>10+ événements organisés.</li>
                    <li>50 à 150 participants par événement.</li>
                    <li>Événements de type associatif.</li>
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
                      <h3 className="font-semibold">Licence en informatique</h3>
                      <p className="text-gray-600">IT University - Antananarivo</p>
                    </div>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">2023-2026</span>
                  </div>
                  <div className="mt-2 text-gray-700 space-y-2">
                    <p>Moyenne générale : 10</p>
                    <div>
                      <p className="font-medium">Projets majeurs :</p>
                      <ul className="list-disc pl-5">
                        <li>Application de gestion de production de fromage (Spring Boot et React)</li>
                        <li>Mini framework web (Java)</li>
                        <li>Mini logiciel de FTP (Java)</li>
                        <li>Application de signalement d'obstacle routier (VueJS)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Compétences académiques acquises :</p>
                      <ul className="list-disc pl-5">
                        <li>Conception orienté objet</li>
                        <li>Architecture logicielle</li>
                        <li>Bases de données relationnelles</li>
                        <li>Bases de données design</li>
                        <li>Web design</li>
                        <li>Web development</li>
                        <li>Sécurité informatique</li>
                        <li>Système d'exploitation</li>
                        <li>Gestion de projet</li>
                      </ul>
                    </div>
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
                  <div className="mt-2 text-gray-700 space-y-1">
                    <p>Mention : sans mention</p>
                    <p>Moyenne : 10</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">TECHNOLOGIES</h2>
              <div className="flex flex-wrap gap-2">
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

            <section>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">COMPÉTENCES TECHNIQUES</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Front-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">ReactJS — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">VueJS — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TailwindCSS — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">JavaScript — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TypeScript — Débutant</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Back-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Java — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Spring Boot — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">C++ — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Laravel — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Django — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PHP — Intermédiaire</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bases de données</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">PostgreSQL — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">MySQL/MariaDB — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">SQLite — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Oracle — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Firebase — Débutant</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Outils & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Git/GitHub — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Docker — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Linux — Intermédiaire</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Vercel — Débutant</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">cPanel — Débutant</span>
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
