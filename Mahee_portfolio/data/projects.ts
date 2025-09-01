// Centralized project data with slugs for routing
export type Project = {
  slug: string
  title: string
  description: string
  image: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    slug: "pawpal-ai-pet-support",
    title: "PawPal – AI Pet Support",
    description:
      "An AI-powered assistant that helps pet owners with care routines, health tips, and quick triage, built for delightful daily use.",
    image: "/pawpal-ai-pet-support-thumbnail.png",
    tags: ["AI", "Pets", "Assistant", "Next.js"],
  },
  {
    slug: "ai-for-farmer-suicide-prevention",
    title: "AI for Farmer Suicide Prevention",
    description:
      "A compassionate AI solution providing early risk signals, multilingual resources, and guided next steps for at-risk communities.",
    image: "/ai-farmer-suicide-prevention-thumbnail.png",
    tags: ["AI", "Health", "NLP", "Safety"],
  },
  {
    slug: "realtime-dashboard",
    title: "Realtime Dashboard",
    description:
      "A responsive, data-rich dashboard featuring live charts, filters, and fast interactions with optimized caching.",
    image: "/realtime-dashboard-ui-dark.png",
    tags: ["Dashboard", "Realtime", "Charts", "UX"],
  },
  {
    slug: "e-commerce-starter",
    title: "E-commerce Starter",
    description:
      "Shoppable, accessible storefront with product cards, quick views, and a clean checkout powered by a headless API.",
    image: "/ecommerce-dark-teal-ui.png",
    tags: ["Commerce", "Accessibility", "Next.js"],
  },
  {
    slug: "docs-system",
    title: "Docs System",
    description:
      "A documentation system with robust navigation, search, and consistent typography that scales to large projects.",
    image: "/documentation-system-dark.png",
    tags: ["Docs", "Search", "Navigation"],
  },
  {
    slug: "portfolio-template",
    title: "Portfolio Template",
    description:
      "Starter template with thoughtful defaults: sticky header, hero, projects grid, and footer with social links.",
    image: "/portfolio-template-dark-teal.png",
    tags: ["Template", "Portfolio", "Starter"],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
