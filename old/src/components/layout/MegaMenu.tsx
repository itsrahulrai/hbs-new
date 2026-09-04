import { forwardRef } from "react";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import type { MegaMenuItem } from "@/data/navigation";

export const MegaMenuPanel = forwardRef<
  HTMLDivElement,
  {
    item: MegaMenuItem;
    left?: number;
    onNavigate: () => void;
  }
>(function MegaMenuPanel({ item, left = 0, onNavigate }, ref) {
  const columns = item.columns ?? [];
  const isCompact = columns.length === 1;

  return (
    <div
      ref={ref}
      style={{
        left: isCompact ? `${left}px` : "0px",
      }}
      className={`absolute top-full z-50 ${
        isCompact ? "w-[340px]" : "left-0 w-full"
      }`}
    >
      <div
        className={`border-t-[3px] border-[var(--color-primary)] bg-white shadow-[0_15px_35px_-12px_rgba(15,23,42,0.16)] ${
          isCompact ? "rounded-xl" : "rounded-b-xl"
        }`}
      >
        <div
          className={
            isCompact
              ? "px-5 py-5"
              : "mx-auto w-full max-w-[1450px] px-6 py-6"
          }
        >
          <div
            className={
              isCompact
                ? "flex flex-col"
                : `grid ${
                    columns.length === 6
                      ? "grid-cols-6"
                      : columns.length === 5
                        ? "grid-cols-5"
                        : columns.length === 4
                          ? "grid-cols-4"
                          : "grid-cols-3"
                  } divide-x divide-slate-100`
            }
          >
            {columns.map((column) => (
              <div
                key={column.heading}
                className={
                  isCompact
                    ? "flex min-w-0 flex-col"
                    : "min-w-0 px-4 first:pl-0 last:pr-0"
                }
              >
                {/* ICON + HEADING */}
                <div className="mb-2 w-fit">
                  {column.icon && (
                    <div className="mb-2 flex w-full justify-center">
                      <img
                        src={column.icon}
                        alt=""
                        width={52}
                        height={52}
                        className="block h-[52px] w-[52px] object-contain"
                      />
                    </div>
                  )}

                  <h3 className="text-[14px] font-bold leading-snug text-slate-900">
                    {column.heading}
                  </h3>
                </div>

                {/* LINKS */}
                <ul className="flex flex-col gap-1.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={onNavigate}
                        className="group flex items-start gap-1.5 text-[13px] leading-snug text-slate-600 transition-colors duration-150 hover:text-[var(--color-primary)]"
                      >
                        <Icon
                          name="chevronDown"
                          size={10}
                          className="mt-[3px] shrink-0 -rotate-90 text-[var(--color-primary)] transition-transform duration-150 group-hover:translate-x-0.5"
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