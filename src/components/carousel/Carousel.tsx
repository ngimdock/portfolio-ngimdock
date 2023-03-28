import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Navigation, Pagination } from "swiper";
import clsx from "clsx";

type CarouselProps = {
  data: any;
  config?: {
    slidesPerView: 1 | 2 | 3 | 4;
    paginationClicable: boolean;
    withHalft: boolean;
  };
};

export const Carousel = ({ data, config }: CarouselProps) => {
  function withOrWithoutHaft(num: number) {
    return !config?.withHalft ? num : num + 0.2;
  }
  const carouselBreackpoints = {
    600: {
      slidesPerView: withOrWithoutHaft(2),
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: withOrWithoutHaft(3),
      spaceBetween: 22,
    },
    1280: {
      slidesPerView: withOrWithoutHaft(3),
      spaceBetween: 22,
    },
  };

  return (
    <section className={clsx("relative")}>
      {config?.withHalft && (
        <div className="absolute top-0 right-0 z-10 w-4 h-full bg-gradient-to-l from-dark md:w-12"></div>
      )}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={carouselBreackpoints}
        autoplay={true}
        navigation={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {data}
      </Swiper>
    </section>
  );
};
