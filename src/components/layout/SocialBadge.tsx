import { Icon } from "@/components/ui/Icon";

const brandColors: Record<string, string> = {
  facebook: "#1877F2",
  instagram: "#E4405F",
  linkedin: "#0A66C2",
  twitter: "#1DA1F2",
  youtube: "#FF0000",
};

export function SocialBadge({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-7 w-7 items-center justify-center rounded-md border border-white/15 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
      style={{ backgroundColor: brandColors[icon] ?? "#333" }}
    >
      <Icon
        name={icon as never}
        size={16}
        className="text-white"
      />
    </a>
  );
}