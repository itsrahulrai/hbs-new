import { forwardRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { MegaMenuItem } from "@/data/navigation";

export const MegaMenuPanel = forwardRef<
  HTMLDivElement,
  {
    item: MegaMenuItem;
    left: number;
    arrowLeft: number;
    onNavigate: () => void;
  }
>(function MegaMenuPanel({ item, left, arrowLeft, onNavigate }, ref) {
  const columns = item.columns ?? [];

  return (
    <div
      ref={ref}
      style={{ left }}
      className="absolute top-full z-40 pt-[13px]"
    >
      <div className="relative">
        {/* arrow attached to top border, sits above the rounded box */}
        <span
          aria-hidden="true"
          style={{ left: arrowLeft }}
          className="absolute -top-[8px] z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-l-[3px] border-t-[3px] border-[var(--color-primary)] bg-white"
        />

        <div className="overflow-hidden rounded-xl border-t-[3px] border-[var(--color-primary)] bg-white shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)]">
        <div className="grid auto-cols-max grid-flow-col gap-x-9 gap-y-8 px-8 py-8">
          {columns.map((column) => (
            <div key={column.heading} className="flex w-[210px] shrink-0 flex-col">
              {column.icon && (
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)]/8 text-[var(--color-primary)]">
                  <Icon name={column.icon as never} size={19} />
                </div>
              )}

              <h3 className="mb-3 text-[15px] font-bold leading-snug text-slate-900">
                {column.heading}
              </h3>

              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="group flex items-start gap-1.5 text-[13.5px] leading-snug text-slate-600 transition-colors duration-150 hover:text-[var(--color-primary)]"
                    >
                      <Icon
                        name="chevronDown"
                        size={11}
                        className="-rotate-90 mt-[3px] shrink-0 text-[var(--color-primary)] transition-transform duration-150 group-hover:translate-x-0.5"
                      />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
});