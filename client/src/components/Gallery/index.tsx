"use client";

import { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Arrow from "../icons/Arrow";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";
import { cn } from "@/lib/utils";

export type Props = {
  slides: {
    id: number;
    img: string;
  }[];
  onSlideClick?: (slideIdx: number) => void;
  initialSlide?: number;
  className?: string;
};
const Gallery: FC<Props> = ({ slides, initialSlide, className, onSlideClick }) => {
  const initialSlideIdx =
    initialSlide && initialSlide < slides.length ? initialSlide : 0;

  if (slides.length === 0) return <></>;

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      initialSlide={initialSlideIdx}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 4,
        clickable: true,
      }}
      navigation={{
        prevEl: ".gallery-swiper-arrow-prev",
        nextEl: ".gallery-swiper-arrow-next",
      }}
      grabCursor={true}
      className={cn('h-96', className)}
      id="gallery-swiper"
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={slide.id}>
          <Image
            fill
            className="rounded-md object-cover"
            src={slide.img}
            alt={`slide #${idx}`}
            onClick={() => onSlideClick && onSlideClick(idx)}
          />
        </SwiperSlide>
      ))}
      <div className="absolute bottom-0 z-10 flex w-full -translate-y-1/2 justify-between px-2">
        <Arrow
          className="gallery-swiper-arrow-prev w-8 rotate-180 cursor-pointer md:w-12"
          color="#fff"
        />
        <Arrow
          className="gallery-swiper-arrow-next w-8 cursor-pointer md:w-12"
          color="#fff"
        />
      </div>
    </Swiper>
  );
};

export default Gallery;
