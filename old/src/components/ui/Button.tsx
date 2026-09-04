import Link from "next/link";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outlineDark";
  className?: string;
  showArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2";
  const variants: Record<string, string> = {
    primary:
      "bg-[var(--color-primary)] text-white shadow-[0_10px_24px_-8px_rgba(229,35,27,0.55)] hover:bg-[var(--color-primary-strong)]",
    secondary:
      "border border-[var(--color-border)] text-[var(--color-text)] bg-[var(--color-surface-raised)] hover:border-[var(--color-primary)]",
    ghost: "text-[var(--color-primary)] hover:underline underline-offset-4",
    outlineDark: "border border-white/30 text-white hover:bg-white hover:text-[var(--color-ink)]",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && <Icon name="arrowRight" size={16} />}
    </Link>
  );
}
