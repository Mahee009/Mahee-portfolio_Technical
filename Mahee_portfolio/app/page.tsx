"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
            Available for freelance — Let’s build something great
          </span>
          <h1 className="font-mono text-balance text-4xl leading-tight md:text-6xl">
            Exploring AI, product, and business — sharing projects, ideas, and experiments.
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I design and build modern web interfaces with a dark, teal-forward aesthetic, focusing on performance,
            accessibility, and clean interaction patterns.
          </p>
          <div className="flex items-center gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="border-border hover:bg-card bg-transparent">
              <a href="#contact" className="flex items-center gap-1">
                Contact <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsGrid() {
  const [query, setQuery] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags ?? []))).sort()

  const q = query.trim().toLowerCase()
  const filtered = projects.filter((p) => {
    const matchesQuery =
      q.length === 0 ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tags ?? []).some((t) => t.toLowerCase().includes(q))
    const matchesTag = !activeTag || (p.tags ?? []).includes(activeTag)
    return matchesQuery && matchesTag
  })

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-mono text-2xl md:text-3xl">Featured Projects</h2>
            <p className="text-sm text-muted-foreground">A selection of recent work</p>
          </div>

          <div className="w-full max-w-md md:w-auto">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <Input
              id="project-search"
              placeholder="Search projects (title, description, tags)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {allTags.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            <Button variant={activeTag === null ? "secondary" : "outline"} size="sm" onClick={() => setActiveTag(null)}>
              All
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={activeTag === tag ? "secondary" : "outline"}
                size="sm"
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Card
              key={p.title}
              className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={p.image || "/placeholder.svg?height=320&width=512&query=project%20thumbnail"}
                  alt={`${p.title} thumbnail`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <CardHeader className="space-y-2">
                <CardTitle className="font-mono transition-colors group-hover:text-accent">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{p.description}</p>
                {p.tags && p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-card px-2 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4">
                  <Button asChild variant="ghost" className="px-0 text-accent hover:text-accent/90">
                    <a href={`/projects/${p.slug}`} className="inline-flex items-center gap-1">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-md border border-border bg-card p-6 text-sm text-muted-foreground">
              No projects match your search or filters.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <main>
      <Hero />
      <ProjectsGrid />
      <section id="about" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-mono text-2xl md:text-3xl">About</h2>
          <p className="mt-3 max-w-2xl text-pretty text-muted-foreground">
            This website is a space where I share my projects, ideas, and experiments in tech, AI, and business. It’s a
            place to learn, build, and grow — while documenting the journey along the way.
          </p>
        </div>
      </section>
    </main>
  )
}
