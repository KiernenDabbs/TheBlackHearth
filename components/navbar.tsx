"use client"

import Link from "next/link"
import Image from "next/image"
import { User, Archive, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500/30 blur-xl rounded-full scale-150 animate-campfire-core" />
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-violet-500/40">
              <Image 
                src="/images/logo-flame.jpg" 
                alt="The Black Hearth"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <span className="font-[family-name:var(--font-one-slice)] text-2xl tracking-wide text-foreground">
            The Black Hearth
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-secondary" asChild>
            <Link href="/vault" className="flex items-center gap-2">
              <Archive className="h-4 w-4" />
              <span>My Vault</span>
            </Link>
          </Button>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/login" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col gap-2 p-4">
            <Button variant="ghost" className="justify-start text-muted-foreground" asChild>
              <Link href="/vault" className="flex items-center gap-2">
                <Archive className="h-4 w-4" />
                <span>My Vault</span>
              </Link>
            </Button>
            <Button variant="default" className="justify-start bg-primary text-primary-foreground" asChild>
              <Link href="/login" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
