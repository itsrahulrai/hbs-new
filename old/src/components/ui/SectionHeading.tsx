import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[var(--fs-3xl)] font-bold text-[var(--color-ink)] dark:text-[var(--color-text)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--fs-lg)] text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
