"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { primaryNav, preHeader } from "@/data/navigation";

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-background)] px-5 py-4 lg:hidden">
      <nav aria-label="Mobile primary">
        <ul className="divide-y divide-[var(--color-border)]">
          {primaryNav.map((item, index) => {
            const hasMenu = !!item.columns;
            const isOpen = openIndex === index;
            return (
              <li key={item.label} className="py-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="py-2 text-base font-medium text-[var(--color-text)]"
                  >
                    {item.label}
                  </Link>
                  {hasMenu && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isOpen}
                      className="p-2 text-[var(--color-text-muted)]"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <Icon
                        name="chevronDown"
                        className={isOpen ? "rotate-180 transition-transform" : "transition-transform"}
                      />
                    </button>
                  )}
                </div>
                {hasMenu && isOpen && (
                  <div className="space-y-4 pb-3 pl-2">
                    {item.columns?.map((column) => (
                      <div key={column.heading}>
                        <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-primary)]">
                          {column.heading}
                        </p>
                        <ul className="space-y-1.5">
                          {column.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                onClick={onNavigate}
                                className="text-sm text-[var(--color-text-muted)]"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-4 flex flex-col gap-3 border-t border-[var(--color-border)] pt-4 text-sm">
        <a href={`tel:${preHeader.phone.replace(/\s/g, "")}`} className="flex items-center gap-2">
          <Icon name="phone" size={16} /> {preHeader.phone}
        </a>
        <a href={`mailto:${preHeader.email}`} className="flex items-center gap-2">
          <Icon name="mail" size={16} /> {preHeader.email}
        </a>
        <Link
          href={preHeader.cta.href}
          onClick={onNavigate}
          className="mt-2 rounded-full bg-[var(--color-primary)] px-5 py-3 text-center font-semibold text-white"
        >
          {preHeader.cta.label}
        </Link>
      </div>
    </div>
  );
}
