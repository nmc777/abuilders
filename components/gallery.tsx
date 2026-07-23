import Image from "next/image"

const projects = [
  { src: "/images/job-driveway-modern.png", title: "Modern Home Driveway", tag: "Driveways" },
  { src: "/images/job-stamped-patio.png", title: "Stamped Stone Patio & Steps", tag: "Decorative" },
  { src: "/images/job-driveway-brick.png", title: "Curved Broom-Finish Driveway", tag: "Driveways" },
  { src: "/images/job-deck-patio.png", title: "Backyard Concrete Pad", tag: "Patios" },
  { src: "/images/job-commercial-1.png", title: "Covered Porch Slab", tag: "Commercial" },
  { src: "/images/job-commercial-2.png", title: "Large-Format Concrete Pad", tag: "Commercial" },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Work</p>
            <h2 className="font-heading text-4xl font-bold uppercase leading-tight text-balance md:text-5xl">
              Recent projects
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            A look at some of the transformations we've delivered across Windsor and Essex County.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <figure
              key={project.title}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={project.src || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-sm bg-brand px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-foreground">
                  {project.tag}
                </span>
                <p className="mt-2 font-heading text-lg font-bold uppercase tracking-wide text-ink-foreground">
                  {project.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
