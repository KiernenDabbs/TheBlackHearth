"use client"

import Image from "next/image"
import { PurpleFire } from "./purple-fire"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
        
        {/* Canvas-based animated purple fire */}
        <div className="absolute inset-0">
          <PurpleFire />
        </div>
        
        {/* Additional glow layers for depth */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          {/* Core flame glow */}
          <div className="absolute w-[500px] h-[600px] bg-violet-500/30 rounded-full blur-[100px] animate-flame-glow" />
          {/* Outer ambient glow */}
          <div className="absolute w-[700px] h-[700px] -translate-x-[100px] -translate-y-[50px] bg-purple-500/20 rounded-full blur-[120px] animate-campfire-outer" />
        </div>
        
        {/* Top gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-transparent pointer-events-none" />
        
        {/* Side gradients for vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 pointer-events-none" />
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Purple Campfire Logo */}
        <div className="mb-8 flex justify-center animate-[fadeInScale_1s_ease-out_0.2s_both]">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/40 blur-2xl rounded-full scale-150 animate-campfire-core" />
            <div className="absolute inset-0 bg-purple-400/20 blur-3xl rounded-full scale-[2] animate-campfire-outer" />
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-violet-500/30">
              <Image 
                src="/images/logo-flame.jpg" 
                alt="The Black Hearth flame logo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Title with fade-in animation */}
        <h1 className="font-[family-name:var(--font-one-slice)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 tracking-wide drop-shadow-[0_0_30px_rgba(139,92,246,0.4)] animate-[fadeInUp_1s_ease-out_0.4s_both]">
          The Black Hearth
        </h1>

        {/* Tagline with staggered animation */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.6s_both]">
          Where shadows gather and stories ignite
        </p>
        
        {/* Subtitle with staggered animation */}
        <p className="text-base text-muted-foreground/70 max-w-xl mx-auto animate-[fadeInUp_1s_ease-out_0.8s_both]">
          Purveyors of cursed tabletop experiences. Board games, card games, and campaign settings 
          forged in the darkest corners of imagination.
        </p>

        {/* Decorative divider with fade-in */}
        <div className="mt-12 flex items-center justify-center gap-4 animate-[fadeIn_1s_ease-out_1s_both]">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-500/50" />
          <div className="h-2 w-2 rotate-45 bg-violet-500/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-500/50" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  )
}
