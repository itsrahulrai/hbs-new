import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { MenuColumn } from "@/data/navigation";

/** Renders one mega-menu column's services as a content card on a service page. */
export function ColumnCard({ column, id }: { column: MenuColumn; id?: string }) {
  return (
    <div
      id={id}
      className="scroll-mt-28 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition-colors hover:border-[var(--color-primary)]"
    >
      <div className="mb-4 flex items-center gap-3">
        {column.icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
            <Icon name={column.icon as never} size={18} />
          </span>
        )}
        <h3 className="font-display text-[var(--fs-lg)] font-semibold text-[var(--color-ink)] dark:text-[var(--color-text)]">
          {column.heading}
        </h3>
      </div>
      <ul className="space-y-2.5">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
            >
              <span className="h-1 w-1 rounded-full bg-[var(--color-neutral-400)] group-hover:bg-[var(--color-primary)]" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
