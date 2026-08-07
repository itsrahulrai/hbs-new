import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";
import { primaryNav, preHeader } from "@/data/navigation";

export function Footer() {
  const footerNav = primaryNav.filter((item) => item.label !== "Contact Us");

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-white">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              AI-powered digital marketing, web &amp; app development, and
              creative design for businesses across India.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {preHeader.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <Icon name={social.icon as never} size={15} />
                </a>
              ))}
            </div>
          </div>

          {footerNav.slice(0, 3).map((item) => (
            <div key={item.label}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-white/50">
                {item.label}
              </p>
              <ul className="space-y-2.5 text-sm text-white/70">
                {(item.columns?.[0]?.links ?? []).slice(0, 6).map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
                {!item.columns && (
                  <li>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hover Business Services LLP. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={`tel:${preHeader.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white">
              <Icon name="phone" size={14} /> {preHeader.phone}
            </a>
            <a href={`mailto:${preHeader.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Icon name="mail" size={14} /> {preHeader.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
