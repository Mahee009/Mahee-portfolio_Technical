"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail } from "lucide-react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b"
          : "bg-transparent",
      )}
      role="banner"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2" aria-label="Go to homepage">
            <span className="h-2 w-2 rounded-sm bg-primary" aria-hidden="true" />
            <span className="font-mono text-lg tracking-tight">MyPortfolio</span>
          </a>
          <nav className="hidden gap-6 md:flex" aria-label="Primary">
            <a href="/#projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Projects
            </a>
            <a href="/#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="/#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 md:flex">
              <a
                href="https://github.com/Mahee009"
                aria-label="GitHub"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mahee-tibrewal-6a7575330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:maheetibrewal87@gmail.com"
                aria-label="Email"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  useEffect(() => {
    const root = document.documentElement
    setIsDark(root.classList.contains("dark"))
  }, [])
  const toggle = () => {
    const root = document.documentElement
    root.classList.toggle("dark")
    setIsDark(root.classList.contains("dark"))
  }
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="text-muted-foreground hover:text-foreground"
    >
      {isDark ? "Dark" : "Light"}
    </Button>
  )
}
