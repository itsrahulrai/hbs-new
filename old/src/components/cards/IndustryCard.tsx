import { Icon } from "@/components/ui/Icon";
import type { MenuColumn } from "@/data/navigation";

export function IndustryCard({ column, id }: { column: MenuColumn; id?: string }) {
  return (
    <div
      id={id}
      className="scroll-mt-28 rounded-[var(--radius-lg)] bg-[var(--color-ink)] p-6 text-white"
    >
      <div className="mb-4 flex items-center gap-3">
        {column.icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--color-primary)]">
            <Icon name={column.icon as never} size={18} />
          </span>
        )}
        <h3 className="font-display text-[var(--fs-lg)] font-semibold">
          {column.heading}
        </h3>
      </div>
      <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-white/70 sm:grid-cols-2">
        {column.links.map((link) => (
          <li key={link.label} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-white/40" />
            {link.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
