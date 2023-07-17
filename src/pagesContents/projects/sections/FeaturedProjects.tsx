import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import useIsInViewport from "use-is-in-viewport";
import { H2 } from "../../../components";
import { Carousel } from "../../../components/carousel/Carousel";
import { ALL_PROJECTS } from "../../../data";
import { ProjectCard } from "../../../pagesCommonSections";

export const FeaturedProjects = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  const featuredProjects = ALL_PROJECTS.filter((project) => project.featured);

  const carouselProjectsData = featuredProjects.map((project) => (
    <SwiperSlide key={project.id}>
      <ProjectCard
        projectData={project}
        config={{ displayTag: false, tagNumber: 3 }}
      />
    </SwiperSlide>
  ));

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container separed-sections"
      )}
    >
      <H2 classe="text-center sm:text-start">Projects en avant.</H2>

      <div className="mt-4">
        <Carousel
          data={carouselProjectsData}
          config={{
            withHalft: true,
            paginationClicable: true,
            slidesPerView: 3,
          }}
        />
      </div>
    </section>
  );
};
