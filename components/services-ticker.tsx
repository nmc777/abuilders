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
    <div className="bg-brand text-brand-foreground overflow-hidden py-6 md:py-10">
      <div className="relative">
        <div className="ticker-content animate-scroll flex items-center">
          {/* First set */}
          {items.map((item, i) => (
            <span key={`first-${item}`} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide whitespace-nowrap md:gap-6 md:text-sm">
              {item}
              {i < items.length - 1 && <span className="text-brand-foreground/50" aria-hidden="true">/</span>}
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, i) => (
            <span key={`second-${item}`} className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide whitespace-nowrap md:gap-6 md:text-sm">
              {item}
              {i < items.length - 1 && <span className="text-brand-foreground/50" aria-hidden="true">/</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
