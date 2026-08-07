import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 && <Icon name="chevronDown" size={11} className="-rotate-90" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-[var(--color-primary)]">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[var(--color-primary)]">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
