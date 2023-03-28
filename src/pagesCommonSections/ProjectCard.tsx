import clsx from "clsx";
import { Tag } from "../components";
import { Project } from "../data/projects";
import Link from "next/link";
import { ROUTE_PROJECTS } from "../lib";

type ProjectCardProps = {
  projectData: Project;
  config?: {
    displayTag: boolean;
    tagNumber: 1 | 2 | 3;
  };
};

export const ProjectCard = ({ projectData, config }: ProjectCardProps) => {
  const { name, mainImage, details, id } = projectData;

  return (
    <Link
      href={{
        pathname: `${ROUTE_PROJECTS}/${id}`,
      }}
    >
      <article
        style={{
          backgroundImage: `url('/assets/images/${mainImage}')`,
        }}
        className="relative flex flex-col justify-end h-40 p-5 text-left bg-center bg-no-repeat bg-cover border-2 cursor-pointer sm:h-48 md:h-56 lg:h-64 bg-card-bg border-dark hover:border-primary bg-dark-3 bg-gr animate"
      >
        <div className="absolute top-0 right-0 w-full h-full bg bg-gradient-to-t from-black"></div>
        <div className="relative z-10 opacity-90 hover:opacity-100">
          <p className="lineClam1  w-[90%] sm:w-[70%] lg:w-[90%] mx-auto md:mx-0 animate  text-xl font-bold text-center md:text-left text-light font-Inter letter-shrink-md">
            {name}
          </p>

          <div className={clsx(config?.displayTag === false && "hidden")}>
            <div
              className={clsx(
                "items-center justify-center md:justify-start  hidden mt-3 space-x-1.5 lg:space-x-3 sm:flex sm:flex-wrap"
              )}
            >
              {details.techStack
                .slice(0, config?.tagNumber ?? 3)
                .map((techno) => (
                  <Tag key={techno.tecnoName}>{techno.tecnoName}</Tag>
                ))}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
