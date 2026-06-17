"use client"

export function Footer() {

  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} The Black Hearth. All rights reserved.
        </p>
         <p className="text-sm text-muted-foreground text-center">
          Designed and Managed by: <a className="text-blue-500" href="https://kiernendabbs.vercel.app">Kiernen Dabbs</a>
        </p>
      </div>
    </footer>
  )
}
