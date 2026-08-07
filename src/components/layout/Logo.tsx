import Image from "next/image";
import Link from "next/link";

export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="Hover Business Services LLP — home">
      <Image
        src="https://hoverbusinessservices.com/images/hbs-logo.png"
        alt="Hover Business Services LLP"
        width={168}
        height={48}
        priority={priority}
        className="h-10 w-auto object-contain sm:h-11"
      />
    </Link>
  );
}
