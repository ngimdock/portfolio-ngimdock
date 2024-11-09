import clsx from "clsx";
import { SwiperSlide } from "swiper/react";
import useIsInViewport from "use-is-in-viewport";
import { H2 } from "../../../components";
import { Carousel } from "../../../components/carousel/Carousel";
import { ProjectCard } from "../../../pagesCommonSections";
import { useContext } from "react";
import { projectContext } from "../../../dataManager/context/projectContext";

export const FeaturedProjects = () => {
  const { projects: all_projects } = useContext(projectContext);
  const [isInViewport, targetRef] = useIsInViewport();

  const featuredProjects = all_projects.filter((project) => project.featured);

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
      <H2 classe="text-center sm:text-start">Featured projects</H2>

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
