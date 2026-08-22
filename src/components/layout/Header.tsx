"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

import { primaryNav } from "@/data/navigation";
import { MegaMenuPanel } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(
    null,
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  const [compactLeft, setCompactLeft] = useState(0);

  const headerRef = useRef<HTMLElement>(null);

  const itemRefs = useRef<
    Array<HTMLDivElement | null>
  >([]);

  /*
   * Close menus with Escape / outside click
   */
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
        !headerRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpenIndex(null);
      }
    }

    document.addEventListener(
      "keydown",
      onKeyDown,
    );

    document.addEventListener(
      "mousedown",
      onClickOutside,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        onKeyDown,
      );

      document.removeEventListener(
        "mousedown",
        onClickOutside,
      );
    };
  }, []);

  /*
   * Position compact one-column dropdown
   * directly below the active menu item.
   */
  useLayoutEffect(() => {
    if (openIndex === null) return;

    const activeItem = primaryNav[openIndex];

    const columns = activeItem?.columns ?? [];

    // Full-width menus don't need positioning.
    if (columns.length !== 1) return;

    function updatePosition() {
      const header = headerRef.current;
      const item = itemRefs.current[openIndex];

      if (!header || !item) return;

      const headerRect =
        header.getBoundingClientRect();

      const itemRect =
        item.getBoundingClientRect();

      const dropdownWidth = 340;

      const itemCenter =
        itemRect.left +
        itemRect.width / 2;

      let left =
        itemCenter -
        dropdownWidth / 2 -
        headerRect.left;

      /*
       * Keep dropdown inside viewport
       */
      const margin = 16;

      const maxLeft =
        window.innerWidth -
        dropdownWidth -
        margin -
        headerRect.left;

      const minLeft =
        margin - headerRect.left;

      left = Math.max(
        minLeft,
        Math.min(left, maxLeft),
      );

      setCompactLeft(left);
    }

    updatePosition();

    window.addEventListener(
      "resize",
      updatePosition,
    );

    return () => {
      window.removeEventListener(
        "resize",
        updatePosition,
      );
    };
  }, [openIndex]);

  const activeItem =
    openIndex !== null
      ? primaryNav[openIndex]
      : null;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-100 bg-white"
    >
      {/* ================= HEADER ================= */}

      <Container>
        <div className="flex h-[76px] items-center justify-between">
          {/* LOGO */}
          <Logo />

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="hidden items-center xl:flex"
            aria-label="Primary"
          >
            {primaryNav.map((item, index) => {
              const hasMenu = !!item.columns;

              const isOpen =
                openIndex === index;

              const isLast =
                index ===
                primaryNav.length - 1;

              return (
                <div
                  key={item.label}
                  ref={(element) => {
                    itemRefs.current[index] =
                      element;
                  }}
                  className="flex shrink-0 items-center"
                >
                  <button
                    type="button"
                    className="group flex items-center gap-1 whitespace-nowrap rounded-lg px-5 py-2.5 text-[15px] font-semibold tracking-[0.2px] text-slate-800 transition-colors duration-200 hover:text-[var(--color-primary)]"
                    aria-expanded={isOpen}
                    aria-haspopup={
                      hasMenu
                        ? "true"
                        : undefined
                    }
                    onClick={() => {
                      if (!hasMenu) return;

                      setOpenIndex(
                        isOpen
                          ? null
                          : index,
                      );
                    }}
                    onMouseEnter={() => {
                      if (hasMenu) {
                        setOpenIndex(index);
                      }
                    }}
                  >
                    {/* MENU TEXT */}

                    <span className="relative inline-flex pb-2">
                      {hasMenu ? (
                        item.label
                      ) : (
                        <Link
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      )}

                      {/* ACTIVE LINE */}

                      <span
                        className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-[var(--color-primary)] transition-all duration-300 ${
                          isOpen
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>

                    {/* CHEVRON */}

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

                  {/* SEPARATOR */}

                  {!isLast && (
                    <span className="mx-1 text-slate-200">
                      |
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] xl:hidden"
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen(
                  (value) => !value,
                )
              }
            >
              <Icon
                name={
                  mobileOpen
                    ? "close"
                    : "menu"
                }
              />
            </button>
          </div>
        </div>
      </Container>

      {/* ================= MEGA MENU ================= */}

      {activeItem && (
        <MegaMenuPanel
          item={activeItem}
          left={compactLeft}
          onNavigate={() =>
            setOpenIndex(null)
          }
        />
      )}

      {/* ================= MOBILE NAV ================= */}

      {mobileOpen && (
        <MobileNav
          onNavigate={() =>
            setMobileOpen(false)
          }
        />
      )}
    </header>
  );
}