"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    function handleChangeConfirmPassword(e) {
        setConfirmPassword(e.target.value);
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
                            <span className="text-violet-400">Login</span>
                        </h2>
                        <form className="text-muted-foreground text-left max-w-2xl mx-auto bg-purple-500 p-4 text-white">
                            <div>Enter your email:
                                <input type="text" value={email} onChange={handleChangeEmail} />
                            </div>
                            <div>Enter your password:
                                <input type="text" value={password} onChange={handleChangePassword} />
                            </div>
                            <div>Confirm your password:
                                <input type="text" value={confirmPassword} onChange={handleChangeConfirmPassword} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
