"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <div className="min-h-screen bg-background flex">
                {/* Left panel — decorative */}
                <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                    {/* Background glow layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-background to-background" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-800/15 rounded-full blur-[80px]" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-between p-12 w-full">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-violet-500/30 blur-xl rounded-full scale-150" />
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

                        {/* Center quote */}
                        <div className="space-y-6">
                            <div className="w-12 h-px bg-violet-500/60" />
                            <blockquote className="space-y-3">
                                <p className="text-3xl font-[family-name:var(--font-one-slice)] leading-snug text-foreground">
                                    "In darkness,<br />we find our fire."
                                </p>
                                <footer className="text-muted-foreground text-sm tracking-widest uppercase">
                                    — The Black Hearth
                                </footer>
                            </blockquote>
                        </div>

                        {/* Bottom tagline */}
                        <p className="text-muted-foreground text-sm">
                            Purveyors of cursed tabletop experiences since the void opened.
                        </p>
                    </div>
                </div>

                {/* Right panel — form */}
                <div className="flex-1 flex items-center justify-center px-6 py-12">
                    <div className="w-full max-w-md space-y-8">

                        {/* Mobile logo */}
                        <div className="flex lg:hidden justify-center">
                            <Link href="/" className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-violet-500/30 blur-xl rounded-full scale-150" />
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
                        </div>

                        {/* Header */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Flame className="h-5 w-5 text-violet-400" />
                                <span className="text-violet-400 text-sm tracking-widest uppercase font-medium">
                                    Enter the Hearth
                                </span>
                            </div>
                            <h1 className="text-4xl font-[family-name:var(--font-one-slice)] text-foreground">
                                Sign In
                            </h1>
                            <p className="text-muted-foreground">
                                Access your Vault and continue your dark journey.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-foreground/80 text-sm tracking-wide">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-card border-border/60 focus:border-violet-500/60 focus:ring-violet-500/20 text-foreground placeholder:text-muted-foreground h-11"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-foreground/80 text-sm tracking-wide">
                                        Password
                                    </Label>
                                    <Link
                                        href="/forgot-password"
                                        className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-card border-border/60 focus:border-violet-500/60 focus:ring-violet-500/20 text-foreground placeholder:text-muted-foreground h-11 pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <Button
                                className="w-full h-11 bg-violet-700 hover:bg-violet-600 text-white font-medium tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                            >
                                Enter the Hearth
                            </Button>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-border/40" />
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="bg-background px-3 text-muted-foreground">or</span>
                                </div>
                            </div>

                            {/* OAuth placeholder */}
                            <Button
                                variant="outline"
                                className="w-full h-11 border-border/60 bg-card hover:bg-secondary text-foreground/80 hover:text-foreground font-medium tracking-wide"
                            >
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </Button>
                        </div>

                        {/* Sign up link */}
                        <p className="text-center text-sm text-muted-foreground">
                            New to The Black Hearth?{" "}
                            <Link href="/register" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
