import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Archive, ShoppingBag, Flame, Plus, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "My Vault | The Black Hearth",
    description: "Your personal collection of dark fantasy tabletop games.",
}

export default function VaultPage() {
    // Will be replaced with real auth check later
    const isLoggedIn = false

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header */}
            <div className="relative pt-32 pb-8 px-6">
                <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Flame className="h-5 w-5 text-violet-400" />
                        <span className="text-violet-400 text-sm tracking-widest uppercase font-medium">
                            Personal
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-5xl font-[family-name:var(--font-one-slice)] text-foreground mb-2">
                                My Vault
                            </h1>
                            <p className="text-muted-foreground">
                                Your personal collection of dark fantasy experiences.
                            </p>
                        </div>
                        {isLoggedIn && (
                            <Button className="bg-violet-700 hover:bg-violet-600 text-white gap-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all">
                                <Plus className="h-4 w-4" />
                                Add to Collection
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Tabs bar — visual only for now */}
            <div className="px-6 border-b border-border/40">
                <div className="mx-auto max-w-6xl">
                    <div className="flex gap-6">
                        <button className="flex items-center gap-2 py-3 text-sm font-medium text-foreground border-b-2 border-violet-500 -mb-px">
                            <Archive className="h-4 w-4" />
                            Collection
                            <span className="ml-1 text-xs bg-violet-500/20 text-violet-400 rounded-full px-2 py-0.5">
                                0
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    {!isLoggedIn ? (
                        <NotLoggedIn />
                    ) : (
                        <EmptyCollection />
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-border/40 py-8 mt-auto">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="text-sm text-muted-foreground text-center">
                        &copy; {new Date().getFullYear()} The Black Hearth. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    )
}

function NotLoggedIn() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-8">
            {/* Icon */}
            <div className="relative">
                <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-2xl scale-150" />
                <div className="relative w-24 h-24 rounded-full bg-card border border-border/60 flex items-center justify-center">
                    <Lock className="h-10 w-10 text-violet-400" />
                </div>
            </div>

            {/* Text */}
            <div className="space-y-3 max-w-md">
                <h2 className="text-3xl font-[family-name:var(--font-one-slice)] text-foreground">
                    Your Vault Awaits
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    Sign in to access your personal collection. Track every game you own,
                    discover what you're missing, and chronicle your dark journey.
                </p>
            </div>

            {/* Stats preview */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                {[
                    { label: "Games Tracked", value: "—" },
                    { label: "Hours Played", value: "—" },
                    { label: "Collection Value", value: "—" },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-lg bg-card border border-border/40 p-4 space-y-1"
                    >
                        <p className="text-2xl font-[family-name:var(--font-one-slice)] text-muted-foreground/40">
                            {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground/60 leading-tight">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
                <Button
                    className="bg-violet-700 hover:bg-violet-600 text-white px-8 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
                    asChild
                >
                    <Link href="/login">Sign In</Link>
                </Button>
                <Button
                    variant="outline"
                    className="border-border/60 bg-card hover:bg-secondary text-foreground/80 hover:text-foreground px-8"
                    asChild
                >
                    <Link href="/register">Create Account</Link>
                </Button>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 w-full max-w-md text-muted-foreground/30">
                <div className="flex-1 h-px bg-border/40" />
                <span className="text-xs tracking-widest uppercase">or browse first</span>
                <div className="flex-1 h-px bg-border/40" />
            </div>

            {/* Browse CTA */}
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground gap-2" asChild>
                <Link href="/#collection">
                    <ShoppingBag className="h-4 w-4" />
                    Browse the Collection
                </Link>
            </Button>
        </div>
    )
}

function EmptyCollection() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-8">
            {/* Icon */}
            <div className="relative">
                <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-2xl scale-150" />
                <div className="relative w-24 h-24 rounded-full bg-card border border-border/60 flex items-center justify-center">
                    <Archive className="h-10 w-10 text-violet-400" />
                </div>
            </div>

            {/* Text */}
            <div className="space-y-3 max-w-md">
                <h2 className="text-3xl font-[family-name:var(--font-one-slice)] text-foreground">
                    The Vault is Empty
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    Your collection awaits its first dark relic. Browse our games and add
                    the ones you own to start tracking your tabletop journey.
                </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
                <Button
                    className="bg-violet-700 hover:bg-violet-600 text-white px-8 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all gap-2"
                    asChild
                >
                    <Link href="/#collection">
                        <ShoppingBag className="h-4 w-4" />
                        Browse Games
                    </Link>
                </Button>
                <Button
                    variant="outline"
                    className="border-border/60 bg-card hover:bg-secondary text-foreground/80 hover:text-foreground px-8 gap-2"
                >
                    <Plus className="h-4 w-4" />
                    Add Manually
                </Button>
            </div>
        </div>
    )
}