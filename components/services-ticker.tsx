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
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 md:px-6">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
            {item}
            {i < items.length - 1 && <span className="text-brand-foreground/50" aria-hidden="true">/</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
