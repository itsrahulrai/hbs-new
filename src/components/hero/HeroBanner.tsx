"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { heroBanners } from "@/data/banners";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        speed={900}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {heroBanners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={1920}
              height={700}
              priority={index === 0}
              className="h-auto w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}