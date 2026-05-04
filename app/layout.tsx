import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Analytics } from '@vercel/analytics/next';
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ANDRIANTSOA A. Manjaka - Portfolio",
  description: "Portfolio personnel de ANDRIANTSOA A. Manjaka, étudiant en informatique",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.png',
  }
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

                {/* Navigation mobile */}
                <div className="md:hidden ml-auto">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Ouvrir le menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent>
                      <nav className="flex flex-col gap-4">
                        <Link href="/" className="text-lg font-medium transition-colors hover:text-foreground/80">
                          Accueil
                        </Link>
                        <Link href="/about" className="text-lg font-medium transition-colors hover:text-foreground/80">
                          À propos
                        </Link>
                        <Link href="/resume" className="text-lg font-medium transition-colors hover:text-foreground/80">
                          CV
                        </Link>
                        <Link href="/projects" className="text-lg font-medium transition-colors hover:text-foreground/80">
                          Projets
                        </Link>
                        <Link href="/contact" className="text-lg font-medium transition-colors hover:text-foreground/80">
                          Contact
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <Analytics />
            <footer className="border-t py-6 md:py-0 bg-gray-50">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © {new Date().getFullYear()} ANDRIANTSOA A. Manjaka. Tous droits réservés.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/manjaka-andriantsoa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:text-blue-600"
                  >
                    LinkedIn
                  </Link>
                  <Link href="https://github.com/Manjaka-dev" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:text-gray-800">
                    GitHub
                  </Link>
                  <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:text-blue-400">
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