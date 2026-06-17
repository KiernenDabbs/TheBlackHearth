"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const games = [
  {
    id: "final-cut",
    title: "Final Cut",
    tagline: "Every choice has consequences. Some are fatal.",
    description: "A psychological horror card game where players must make impossible decisions. Trust no one, not even yourself.",
    image: "/images/final-cut.jpg",
    accentColor: "from-red-900/40 to-red-950/60",
    borderColor: "border-red-900/30",
    overlayColor: "bg-red-950/60",
  },
  {
    id: "swamplight",
    title: "SwampLight",
    tagline: "Follow the lights. Lose your way.",
    description: "Navigate treacherous marshlands guided only by mysterious wisps. A cooperative survival game of dread and discovery.",
    image: "/images/swamplight.jpg",
    accentColor: "from-emerald-900/40 to-emerald-950/60",
    borderColor: "border-emerald-900/30",
    overlayColor: "bg-emerald-950/60",
  },
  {
    id: "hollowreach",
    title: "HollowReach",
    tagline: "The forgotten realm awaits.",
    description: "A D&D 5e campaign setting in a world where the veil between life and death has shattered. Build your legend among the ruins.",
    image: "/images/hollowreach.jpg",
    accentColor: "from-violet-900/40 to-violet-950/60",
    borderColor: "border-violet-900/30",
    overlayColor: "bg-violet-950/60",
  },
]

export function GameCarousel() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background atmospheric effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-violet-400">Collection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each game is forged in shadow, designed to test your resolve and ignite your imagination.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {games.map((game) => (
              <CarouselItem key={game.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className={`group relative h-full overflow-hidden bg-card border ${game.borderColor} hover:border-violet-500/50 transition-all duration-500`}>
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dark overlay for readability */}
                    <div className={`absolute inset-0 ${game.overlayColor} transition-opacity duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  </div>

                  <CardContent className="relative p-6 flex flex-col h-full min-h-[380px] justify-end">
                    {/* Content */}
                    <h3 className="font-[family-name:var(--font-one-slice)] text-3xl text-foreground mb-2 tracking-wide drop-shadow-lg">
                      {game.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3 italic">
                      {game.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6">
                      {game.description}
                    </p>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full justify-between border-foreground/20 text-foreground hover:bg-foreground/10 hover:border-violet-500/50 group/btn"
                      asChild
                    >
                      <Link href={`/games/${game.id}`}>
                        <span>Explore</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-secondary border-border hover:bg-secondary/80 hover:border-violet-500/50" />
          <CarouselNext className="hidden md:flex -right-4 bg-secondary border-border hover:bg-secondary/80 hover:border-violet-500/50" />
        </Carousel>

        {/* Mobile indicator */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          Swipe to explore more
        </p>
      </div>
    </section>
  )
}
