import { cn } from "@/lib/cn";

export function Skeleton({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-sm)] bg-[var(--color-neutral-200)] dark:bg-[var(--color-neutral-800)]",
        className
      )}
      style={style}
      aria-hidden="true"
    />
  );
}
