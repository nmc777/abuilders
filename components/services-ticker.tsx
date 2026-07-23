const items = [
  "Driveways",
  "Commercial Concrete",
  "Stamped Concrete",
  "Patios",
  "Polished Concrete",
  "Exposed Aggregate",
  "Concrete Repair",
  "Sealing",
]

export function ServicesTicker() {
  return (
    <div className="bg-brand text-brand-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-3 md:gap-x-6 md:px-6 md:py-4">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide md:gap-6 md:text-sm">
            {item}
            {i < items.length - 1 && <span className="text-brand-foreground/50" aria-hidden="true">/</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
