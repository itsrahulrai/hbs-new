export function ClientLogos({
  heading,
  logos,
}: {
  heading: string;
  logos: string[];
}) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-white p-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
        {heading}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {logos.map((logo) => (
          <span
            key={logo}
            className="font-display text-sm font-bold text-[var(--color-neutral-500)]"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
