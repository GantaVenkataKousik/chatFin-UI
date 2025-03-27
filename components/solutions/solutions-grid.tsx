"use client"
import { SolutionCard } from "./solution-card"

// Update the solution images with the provided images

// Replace the existing solutionImages object with this:
const solutionImages = {
  dataQuery: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-67PXjDtY5MvZphKhlvnOvfTVX66b7d.png",
  reconciliation: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-86SvcbJyze4w9KBqb9eBzOQ4GRM9Au.png",
  flux: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LmrQwrtMEtEUINa0KcbEgdaU5DeUNR.png",
  analytics: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l2g5ekWgOK4w1eUMEcUzWJJqNoSZCt.png",
  predictive: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MKvzUgnO1X0GIyviU5A7Dm3UvFIMbA.png",
}

// Update the solutions array to use the new images
// Replace the solutions array with this:
const solutions = [
  {
    title: "AI Data Query",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "green-500",
    imageSrc: "/solutions/data-query.png",
    slug: "data-query",
    bgColor: "from-green-600 to-green-700",
  },
  {
    title: "AI Reconciliation",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "blue-500",
    imageSrc: "/solutions/reconciliation.png",
    slug: "reconciliation",
    bgColor: "from-blue-600 to-blue-700",
  },
  {
    title: "AI Flux",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "purple-500",
    imageSrc: "/solutions/flux.png",
    slug: "flux",
    bgColor: "from-purple-600 to-purple-700",
  },
  {
    title: "AI Analytics",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "amber-500",
    imageSrc: "/solutions/analytics.png",
    slug: "analytics",
    bgColor: "from-amber-600 to-amber-700",
  },
  {
    title: "AI Predictive Analytics",
    description:
      "Streamline workflows, reduce manual tasks, and increase productivity with AI-driven process automation.",
    color: "green-500",
    imageSrc: "/solutions/predictive-analytics.png",
    slug: "predictive-analytics",
    bgColor: "from-green-600 to-green-700",
  },
]

export function SolutionsGrid() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.slug}
              title={solution.title}
              description={solution.description}
              color={solution.color}
              imageSrc={Object.values(solutionImages)[index % Object.values(solutionImages).length]}
              slug={solution.slug}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

