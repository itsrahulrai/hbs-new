import { forwardRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { MegaMenuItem } from "@/data/navigation";

export const MegaMenuPanel = forwardRef<
  HTMLDivElement,
  {
    item: MegaMenuItem;
    left: number;
    onNavigate: () => void;
  }
>(function MegaMenuPanel({ item, left, onNavigate }, ref) {
  const columns = item.columns ?? [];

  return (
    <div
      ref={ref}
      style={{ left }}
      className="absolute top-full z-40 pt-[22px]"
    >
      <div className="overflow-hidden rounded-xl border-t-[3px] border-[var(--color-primary)] bg-white shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)]">
        <div className="grid auto-cols-max grid-flow-col divide-x divide-slate-100 px-8 pt-8 pb-12">
          {columns.map((column) => (
            <div
              key={column.heading}
              className="flex w-[210px] shrink-0 flex-col px-6 first:pl-0 last:pr-0"
            >
              {column.icon && (
                <div className="mb-4 flex h-14 items-center justify-center">
                  <img
                    src={column.icon}
                    alt=""
                    width={44}
                    height={44}
                    className="h-[44px] w-[44px] object-contain"
                  />
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
  );
});
