import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  titlePrefix,
  highlight,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title?: string;
  titlePrefix?: string;
  highlight?: string;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  let mainTitle = title || titlePrefix || "";
  let badgeText = highlight || "";
  let suffixText = "";

  // Auto-detect brackets in title like "Our Clients Trust Us to [Drive Digital Growth]"
  if (!badgeText && title && title.includes("[") && title.includes("]")) {
    const match = title.match(/^(.*?)\[(.*?)\](.*)$/);
    if (match) {
      mainTitle = match[1]?.trim() ?? "";
      badgeText = match[2]?.trim() ?? "";
      suffixText = match[3]?.trim() ?? "";
    }
  }

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center flex flex-col items-center",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/90 bg-white/95 px-3.5 py-1 sm:px-4 sm:py-1.5 shadow-[0_2px_10px_rgba(229,35,27,0.06)] backdrop-blur-md mb-2.5 sm:mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e5231b] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e5231b]" />
          </span>
          <span className="font-display text-[10px] min-[360px]:text-[11px] font-bold uppercase tracking-[0.14em] text-[#e5231b]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="font-display text-[20px] sm:text-[25px] lg:text-[28px] xl:text-[30px] font-bold tracking-[-0.025em] text-[#0b132b] leading-[1.3] sm:leading-[1.28]">
        {badgeText ? (
          <>
            {mainTitle && <span>{mainTitle} </span>}
            <span className="text-[#e5231b]">{badgeText}</span>
            {suffixText && <span> {suffixText}</span>}
          </>
        ) : (
          <span>{mainTitle}</span>
        )}
      </h2>

      {description && (
        <p className="mt-3 text-[14px] sm:text-[15.5px] text-[#475569] leading-[1.68] sm:leading-relaxed [text-wrap:pretty]">
          {description}
        </p>
      )}
    </div>
  );
}
