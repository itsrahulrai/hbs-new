"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  desktopHeroBanners,
  mobileHeroBanners,
} from "@/data/banners";

export function HeroBanner() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Don't render either slider until viewport is detected.
  // This prevents the wrong banner set from being loaded.
  if (isMobile === null) {
    return (
      <div
        className="w-full bg-[var(--color-bg)]"
        aria-hidden="true"
      />
    );
  }

  const banners = isMobile
    ? mobileHeroBanners
    : desktopHeroBanners;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={banners.length > 1}
      speed={700}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      className="hero-swiper w-full"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={banner}>
          <div className="relative w-full overflow-hidden">
            <Image
              src={banner}
              alt={`Hero banner ${index + 1}`}
              width={isMobile ? 768 : 1920}
              height={isMobile ? 1000 : 700}
              priority={index === 0}
              sizes="100vw"
              className="h-auto w-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}