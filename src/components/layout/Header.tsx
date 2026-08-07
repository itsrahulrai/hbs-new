"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { primaryNav } from "@/data/navigation";
import { MegaMenuPanel } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panelPos, setPanelPos] = useState({ left: 0 });

  const headerRef = useRef<HTMLElement>(null);
  const navListRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    }
    function onClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  // measure trigger + panel and clamp the panel inside the nav bounds
  useLayoutEffect(() => {
    if (openIndex === null) return;

    function measure() {
      const navEl = navListRef.current;
      const itemEl = itemRefs.current[openIndex as number];
      const panelEl = panelRef.current;
      if (!navEl || !itemEl || !panelEl) return;

      const navRect = navEl.getBoundingClientRect();
      const itemRect = itemEl.getBoundingClientRect();
      const panelWidth = panelEl.offsetWidth;

      const itemCenterNavRelative =
        itemRect.left - navRect.left + itemRect.width / 2;
      const desiredViewportLeft =
        navRect.left + itemCenterNavRelative - panelWidth / 2;

      const margin = 16;
      const minViewportLeft = margin;
      const maxViewportLeft = Math.max(
        window.innerWidth - panelWidth - margin,
        margin,
      );
      const clampedViewportLeft = Math.min(
        Math.max(desiredViewportLeft, minViewportLeft),
        maxViewportLeft,
      );

      setPanelPos({ left: clampedViewportLeft - navRect.left });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [openIndex]);

  const activeItem = openIndex !== null ? primaryNav[openIndex] : null;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-100 bg-white"
    >
      <Container>
        <div className="flex h-[76px] items-center justify-between">
          <Logo />

          <nav
            ref={navListRef}
            className="relative hidden items-center xl:flex"
            aria-label="Primary"
          >
            {primaryNav.map((item, index) => {
              const hasMenu = !!item.columns;
              const isOpen = openIndex === index;
              const isLast = index === primaryNav.length - 1;
              return (
                <div
                  key={item.label}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="flex shrink-0 items-center"
                >
                  <button
                    type="button"
                    className="group flex items-center gap-1 whitespace-nowrap rounded-lg px-5 py-2.5 text-[15px] font-semibold tracking-[0.2px] text-slate-800 transition-colors duration-200 hover:text-[var(--color-primary)]"
                    aria-expanded={isOpen}
                    aria-haspopup={hasMenu ? "true" : undefined}
                    onClick={() => {
                      if (!hasMenu) return;
                      setOpenIndex(isOpen ? null : index);
                    }}
                    onMouseEnter={() => hasMenu && setOpenIndex(index)}
                  >
                    <span className="relative inline-flex pb-2">
                      {hasMenu ? (
                        item.label
                      ) : (
                        <Link href={item.href}>{item.label}</Link>
                      )}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[var(--color-primary)] transition-all duration-300 ${
                          isOpen ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                    {hasMenu && (
                      <Icon
                        name="chevronDown"
                        size={14}
                        className={`transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-[var(--color-primary)]"
                            : "text-slate-400 group-hover:text-[var(--color-primary)]"
                        }`}
                      />
                    )}
                  </button>

                  {!isLast && <span className="mx-1 text-slate-200">|</span>}
                </div>
              );
            })}

            {activeItem && (
              <MegaMenuPanel
                ref={panelRef}
                item={activeItem}
                left={panelPos.left}
                onNavigate={() => setOpenIndex(null)}
              />
            )}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Icon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </Container>

      {mobileOpen && <MobileNav onNavigate={() => setMobileOpen(false)} />}
    </header>
  );
}
