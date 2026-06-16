"use client"

export function Footer() {

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} The Black Hearth. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/60 italic">
              &quot;In darkness, we find our fire.&quot;
            </p>
          </div>
        </div>
    </footer>
  )
}
