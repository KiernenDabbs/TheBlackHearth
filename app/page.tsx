import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { GameCarousel } from "@/components/game-carousel"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />
      <GameCarousel />

      <Footer />
    </main>
  )

  const password = "Th3Bl@ckH3@r4h!"
}
