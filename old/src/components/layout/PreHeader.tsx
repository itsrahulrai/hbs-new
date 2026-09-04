import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { preHeader } from "@/data/navigation";
import { SocialBadge } from "./SocialBadge";

export function PreHeader() {
  return (
    <div className="hidden h-12 bg-[#0f0f10] xl:block border-b border-white/10">
      <Container>
        <div className="flex h-12 items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-3 text-[14px]">
            {/* Phone */}
            <a
              href={`tel:${preHeader.phone.replace(/\s/g, "")}`}
              className="group flex items-center gap-2 transition-colors duration-300"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/30">
                <Icon
                  name="phone"
                  size={15}
                  className="text-[var(--color-primary)]"
                />
              </span>

              <span className="text-white font-medium">{preHeader.phone}</span>
            </a>

            <span className="text-white/50">|</span>

            {/* Email */}
            <a
              href={`mailto:${preHeader.email}`}
              className="group flex items-center gap-2 transition-colors duration-300"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/20">
                <Icon
                  name="mail"
                  size={15}
                  className="text-[var(--color-primary)]"
                />
              </span>

              <span className="font-medium text-white transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                {preHeader.email}
              </span>
            </a>

            <span className="text-white/50">|</span>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${preHeader.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white hover:text-[#25D366] transition-colors"
            >
              <Image
                src="/icons/WhatsApp.svg"
                alt="WhatsApp"
                width={22}
                height={22}
              />

              <span className="font-medium text-white transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                WhatsApp {preHeader.whatsapp}
              </span>
            </a>

            <span className="text-white/50">|</span>

            {/* Follow */}
            <span className="font-semibold text-white">Follow Us :</span>

            <div className="flex items-center gap-2">
              {preHeader.socials.map((social) => (
                <SocialBadge key={social.label} {...social} />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="pl-6">
            <Link
              href={preHeader.cta.href}
              className="flex h-10 items-center gap-2 rounded bg-[var(--color-primary)] px-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--color-primary-strong)] hover:shadow-md"
            >
              <Icon name="rocket" size={14} className="text-white" />

              <span className="text-white">{preHeader.cta.label}</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
