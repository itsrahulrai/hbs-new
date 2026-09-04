import { Icon } from "@/components/ui/Icon";
import type { Stat } from "@/types";

export function StatBar({ stats, variant = "light" }: { stats: Stat[]; variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-[var(--radius-md)] border p-4 text-center animate-rise ${
            isDark
              ? "border-white/10 bg-white/5"
              : "border-[var(--color-border)] bg-[var(--color-surface-raised)]"
          }`}
        >
          {stat.icon && (
            <Icon
              name={stat.icon as never}
              className={`mx-auto mb-2 ${isDark ? "text-[var(--color-primary)]" : "text-[var(--color-primary)]"}`}
            />
          )}
          <dd className={`font-display text-[var(--fs-xl)] font-bold ${isDark ? "text-white" : "text-[var(--color-ink)]"}`}>
            {stat.value}
          </dd>
          <dt className={`mt-1 text-xs ${isDark ? "text-white/60" : "text-[var(--color-text-muted)]"}`}>
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
