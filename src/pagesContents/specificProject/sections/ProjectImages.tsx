import clsx from "clsx";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import useIsInViewport from "use-is-in-viewport";
import { H2 } from "../../../components";
import { Carousel } from "../../../components/carousel/Carousel";

type ProjectImagesProps = {
  images: string[];
};

export const ProjectImages = ({ images }: ProjectImagesProps) => {
  const [isInViewport, targetRef] = useIsInViewport();

  const carouselImages = images.map((img, index) => (
    <SwiperSlide key={index} className="h-[700px]">
      <Image
        src={`/assets/images/${img}`}
        alt="project alt"
        width={400}
        height={400}
        className="inline-block w-full h-full bg-cover"
      />
    </SwiperSlide>
  ));

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "mt-14"
      )}
    >
      <H2 classe="text-center">Quelques maquettes</H2>
      <div className="mt-6">
        <Carousel
          data={carouselImages}
          config={{
            withHalft: true,
            slidesPerView: 2,
            paginationClicable: true,
          }}
        />
      </div>
    </section>
  );
};
