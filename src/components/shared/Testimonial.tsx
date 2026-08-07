import { Icon } from "@/components/ui/Icon";

export function Testimonial({
  quote,
  source,
  rating,
  variant = "light",
}: {
  quote: string;
  source: string;
  rating: number;
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <figure
      className={`rounded-[var(--radius-lg)] border p-8 ${
        isDark ? "border-white/10 bg-white/5" : "border-[var(--color-border)] bg-[var(--color-surface-raised)]"
      }`}
    >
      <div className="mb-4 flex gap-1 text-[var(--color-primary)]">
        {Array.from({ length: rating }).map((_, i) => (
          <Icon key={i} name="star" size={16} />
        ))}
      </div>
      <blockquote className={`text-[var(--fs-lg)] font-medium ${isDark ? "text-white" : "text-[var(--color-ink)] dark:text-[var(--color-text)]"}`}>
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className={`mt-4 text-sm ${isDark ? "text-white/60" : "text-[var(--color-text-muted)]"}`}>
        — {source}
      </figcaption>
    </figure>
  );
}
