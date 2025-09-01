import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects, getProjectBySlug } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — Project`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Params) {
  const project = getProjectBySlug(params.slug)
  if (!project) {
    notFound()
  }

  return (
    <main className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <nav className="mb-6 text-sm text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="/#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <span className="mx-2">/</span>
          <span className="text-foreground">{project.title}</span>
        </nav>

        <header className="mb-8">
          <h1 className="font-mono text-3xl leading-tight md:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">{project.description}</p>
        </header>

        <section className="mb-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="relative aspect-[16/9] w-full">
            <img
              src={project.image || "/placeholder.svg?height=480&width=800&query=project%20hero"}
              alt={`${project.title} hero`}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {project.tags && project.tags.length > 0 && (
          <div className="mb-10 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-md border border-border bg-card px-2 py-1 text-xs text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        )}

        <section className="prose prose-invert max-w-3xl">
          <h2 className="font-mono text-xl">Overview</h2>
          <p className="text-muted-foreground">
            This project page demonstrates routing, global theming, and a clean details layout. You can replace this
            content with richer write-ups, images, or embedded demos as needed.
          </p>
        </section>

        <div className="mt-10">
          <Button asChild variant="outline" className="border-border hover:bg-card bg-transparent">
            <a href="/#projects" className="inline-flex items-center gap-1">
              Back to projects <ChevronRight className="h-4 w-4 rotate-180" />
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
