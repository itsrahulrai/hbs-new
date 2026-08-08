"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SocialBadge } from "./SocialBadge";
import { primaryNav, preHeader } from "@/data/navigation";

export function MobileNav({
  onNavigate,
}: {
  onNavigate: () => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleNavigate = () => {
    setOpenIndex(null);
    onNavigate();
  };

  return (
    <div className="flex h-full flex-col">

      {/* =========================
          Navigation
      ========================== */}
      <nav className="flex-1 overflow-y-auto px-4 py-5">
        <div className="space-y-1">
          {primaryNav.map((item, index) => {
            const hasMenu = !!item.columns;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.label}
                className="overflow-hidden rounded-xl"
              >
                {/* Main Navigation Item */}
                <div
                  className={`flex items-center justify-between ${isOpen
                      ? "bg-[var(--color-primary)]/[0.06]"
                      : ""
                    }`}
                >
                  <Link
                    href={item.href || "#"}
                    onClick={handleNavigate}
                    className="flex min-h-[50px] flex-1 items-center px-3 text-[15px] font-semibold text-[var(--color-text)] transition-colors"
                  >
                    {item.label}
                  </Link>

                  {hasMenu && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="mr-1 flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-black/[0.04]"
                    >
                      <Icon
                        name="chevronDown"
                        className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {hasMenu && isOpen && (
                  <div className="mb-1 ml-3 border-l border-[var(--color-border)] pl-3">
                    {item.columns?.map((column) => (
                      <div
                        key={column.heading}
                        className="py-2"
                      >
                        <p className="px-3 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                          {column.heading}
                        </p>

                        <div className="space-y-0.5">
                          {column.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={handleNavigate}
                              className="flex min-h-[42px] items-center rounded-lg px-3 text-sm text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-primary)]/[0.05] hover:text-[var(--color-primary)]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* =========================
          Contact + Social + CTA
      ========================== */}
      <div className="border-t border-[var(--color-border)] bg-white px-4 py-5">

        {/* Contact Information */}
        <div className="space-y-2.5">

          {/* Phone */}
          <a
            href={`tel:${preHeader.phone.replace(/\s/g, "")}`}
            className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-3 transition-all hover:border-[var(--color-primary)]/30"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/[0.08] text-[var(--color-primary)]">
              <Icon
                name="phone"
                className="h-4 w-4"
              />
            </span>

            <span className="min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Call Us
              </span>

              <span className="block truncate text-sm font-semibold text-[var(--color-text)]">
                {preHeader.phone}
              </span>
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${preHeader.email}`}
            className="group flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3.5 py-3 transition-all hover:border-[var(--color-primary)]/30"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/[0.08] text-[var(--color-primary)]">
              <Icon
                name="mail"
                className="h-4 w-4"
              />
            </span>

            <span className="min-w-0">
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Email Us
              </span>

              <span className="block truncate text-sm font-semibold text-[var(--color-text)]">
                {preHeader.email}
              </span>
            </span>
          </a>

        </div>

        {/* =========================
            Social Media
        ========================== */}
        <div className="mt-5">

          <p className="mb-3 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Follow Us
          </p>

          <div className="flex items-center justify-center gap-2">
            {preHeader.socials.map((social) => (
              <SocialBadge
                key={social.label}
                {...social}
              />
            ))}
          </div>

        </div>

        {/* =========================
            CTA
        ========================== */}
        <Link
          href={preHeader.cta.href}
          onClick={handleNavigate}
          className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
        >
          <span className="text-white">
            {preHeader.cta.label}
          </span>

          <Icon
            name="arrowRight"
            className="h-4 w-4 text-white"
          />
        </Link>

      </div>
    </div>
  );
}