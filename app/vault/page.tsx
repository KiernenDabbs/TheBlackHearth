"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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

export default function Vault() {
    const ownedGames = [

    ]

    function Body() {
        if (ownedGames.length > 0) {
            return (
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {ownedGames.map(game => (
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
            );
        } else {
            return (
                <div>
                    <div>No games found</div>
                </div>
            );
        }
    }

    return (
        <main className="min-h-screen">
            <Navbar />

            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Background atmospheric effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Your <span className="text-violet-400">Collection</span>
                        </h2>

                        <Body />

                    </div>

                    {/* Mobile indicator */}
                    <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
                        Swipe to explore more
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    )
}
