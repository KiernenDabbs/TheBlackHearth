import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GameCarousel } from "@/components/game-carousel"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GameCarousel />
      
      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} The Black Hearth. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 italic">
              &quot;In darkness, we find our fire.&quot;
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
