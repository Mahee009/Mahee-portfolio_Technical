import type React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <SocialLink href="https://github.com/Mahee009" label="GitHub">
              <Github className="h-5 w-5" />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/mahee-tibrewal-6a7575330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="mailto:maheetibrewal87@gmail.com" label="Email">
              <Mail className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-md border border-border bg-card p-2 text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-ring"
    >
      {children}
    </a>
  )
}
