"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff, Flame, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function PasswordRule({ met, text }: { met: boolean; text: string }) {
    return (
        <div className={`flex items-center gap-2 text-xs transition-colors ${met ? "text-violet-400" : "text-muted-foreground"}`}>
            {met ? <Check className="h-3 w-3" /> : <X className="h-3 w-3 opacity-40" />}
            {text}
        </div>
    )
}

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const rules = {
        length: password.length >= 8,
        upper: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        match: password.length > 0 && password === confirm,
    }

    const allValid = Object.values(rules).every(Boolean) && username.length > 0 && email.length > 0

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left panel — decorative */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-background to-background" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-2/3 left-1/4 w-48 h-48 bg-purple-800/15 rounded-full blur-[80px]" />

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

                    {/* Center content */}
                    <div className="space-y-8">
                        <div className="w-12 h-px bg-violet-500/60" />
                        <div className="space-y-4">
                            <h2 className="text-3xl font-[family-name:var(--font-one-slice)] leading-snug text-foreground">
                                Forge your identity.<br />Claim your Vault.
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Join a fellowship of dark fantasy enthusiasts. Your Vault awaits — a place to track your collection, wishlist, and campaign history.
                            </p>
                        </div>

                        {/* Feature list */}
                        <div className="space-y-3">
                            {[
                                "Track your tabletop collection",
                                "Build wishlists for upcoming releases",
                                "Access exclusive campaign settings",
                                "Connect with fellow adventurers",
                            ].map((feature) => (
                                <div key={feature} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-muted-foreground text-sm">
                        Already a member?{" "}
                        <Link href="/login" className="text-violet-400 hover:text-violet-300 transition-colors">
                            Sign in here
                        </Link>
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
                                Join the Hearth
                            </span>
                        </div>
                        <h1 className="text-4xl font-[family-name:var(--font-one-slice)] text-foreground">
                            Create Account
                        </h1>
                        <p className="text-muted-foreground">
                            Begin your dark journey. No experience required.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="space-y-5">
                        {/* Username */}
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-foreground/80 text-sm tracking-wide">
                                Username
                            </Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="DarkAdventurer42"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-card border-border/60 focus:border-violet-500/60 focus:ring-violet-500/20 text-foreground placeholder:text-muted-foreground h-11"
                            />
                        </div>

                        {/* Email */}
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

                        {/* Password */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-foreground/80 text-sm tracking-wide">
                                Password
                            </Label>
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

                            {/* Password rules */}
                            {password.length > 0 && (
                                <div className="grid grid-cols-2 gap-1.5 pt-1">
                                    <PasswordRule met={rules.length} text="8+ characters" />
                                    <PasswordRule met={rules.upper} text="Uppercase letter" />
                                    <PasswordRule met={rules.number} text="Number" />
                                </div>
                            )}
                        </div>

                        {/* Confirm password */}
                        <div className="space-y-2">
                            <Label htmlFor="confirm" className="text-foreground/80 text-sm tracking-wide">
                                Confirm Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="confirm"
                                    type={showConfirm ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    className={`bg-card border-border/60 focus:border-violet-500/60 focus:ring-violet-500/20 text-foreground placeholder:text-muted-foreground h-11 pr-10 transition-colors ${confirm.length > 0 && !rules.match ? "border-red-500/50" : ""
                                        } ${rules.match ? "border-violet-500/50" : ""}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {confirm.length > 0 && !rules.match && (
                                <p className="text-xs text-red-400">Passwords do not match</p>
                            )}
                        </div>

                        {/* Terms */}
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            By creating an account you agree to our{" "}
                            <Link href="/terms" className="text-violet-400 hover:text-violet-300 transition-colors">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-violet-400 hover:text-violet-300 transition-colors">
                                Privacy Policy
                            </Link>
                            .
                        </p>

                        {/* Submit */}
                        <Button
                            disabled={!allValid}
                            className="w-full h-11 bg-violet-700 hover:bg-violet-600 text-white font-medium tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none"
                        >
                            Forge My Account
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

                        {/* Google */}
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

                    {/* Sign in link */}
                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-violet-400 hover:text-violet-300 transition-colors font-medium">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}