import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ANDRIANTSOA A. Manjaka - Portfolio",
  description: "Portfolio personnel de ANDRIANTSOA A. Manjaka, étudiant en informatique",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <span className="text-xl font-bold">Manjaka</span>
                </Link>
                <nav className="hidden md:flex flex-1 items-center justify-between">
                  <div className="flex gap-6 text-sm">
                    <Link href="/" className="transition-colors hover:text-foreground/80">
                      Accueil
                    </Link>
                    <Link href="/about" className="transition-colors hover:text-foreground/80">
                      À propos
                    </Link>
                    <Link href="/resume" className="transition-colors hover:text-foreground/80">
                      CV
                    </Link>
                    <Link href="/projects" className="transition-colors hover:text-foreground/80">
                      Projets
                    </Link>
                    <Link href="/contact" className="transition-colors hover:text-foreground/80">
                      Contact
                    </Link>
                  </div>
                </nav>
                <div className="md:hidden ml-auto">
                  <button className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Analytics />
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} ANDRIANTSOA A. Manjaka. Tous droits réservés.
                </p>
                <div className="flex gap-4">
                  <Link href="https://www.linkedin.com/in/andrivola-manjaka-andriantsoa-086204290" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    LinkedIn
                  </Link>
                  <Link href="https://github.com/Manjaka-dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    GitHub
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    Twitter
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
