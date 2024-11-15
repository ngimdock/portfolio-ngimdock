import clsx from "clsx";
import Image from "next/image";
import { Button, H2, H3, Para } from "../../../components";
import { Project, TECHNOS, TechStackType, TECH_STACK } from "../../../data";
import { ProjectCard } from "../../../pagesCommonSections";
import img from "../../../../public/assets/images/images.jpeg";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_PROJECTS, SCREEN_SM } from "../../../lib";
import { useResizeWindow } from "../../../hooks";
import { useContext, useState } from "react";
import { Tooltip } from "../../../components/tooltip/Tooltip";
import { projectContext } from "../../../dataManager/context/projectContext";

export const Projects = () => {
  const { projects: all_projects } = useContext(projectContext);

  const [technos, setTechnos] = useState(TECHNOS);
  const [projects, setProjects] = useState(
    getProjectBuildWithTechno(all_projects, TECH_STACK.nestjs.tecnoName)
  );

  function onSelectTechno(tecnoName: string) {
    const technoWithNoBorder = TECHNOS.map(
      (techno: TechStackType): TechStackType => ({ ...techno, selected: false })
    );

    technoWithNoBorder.forEach((techno) => {
      if (techno.tecnoName === tecnoName) techno.selected = true;
    });

    const technosWithTheTargetName = getProjectBuildWithTechno(
      all_projects,
      tecnoName
    );

    setProjects(technosWithTheTargetName);

    setTechnos(technoWithNoBorder);
  }

  function getProjectBuildWithTechno(technos: Project[], technoName: string) {
    return technos.filter((project) => {
      const foundedTechno = project.details.techStack.find(
        (techno) => techno.tecnoName === technoName
      );

      return !!foundedTechno;
    });
  }

  return (
    <section
      className={clsx(
        "md:container-lg flex flex-col items-center text-center separed-sections px-4 md:px-0"
      )}
    >
      <div className="hidden sm:block">
        <H3>Portfolio</H3>
      </div>
      <H3 classe="sm:hidden">Portfolio</H3>
      <H2 classe="mt-3">Explore my latest projects.</H2>
      <Para>
        A selection of projects I&apos;ve developed or contributed to as part of
        the development team.
      </Para>

      <div className="w-full grid-cols-8 grid-rows-2 mt-10 md:grid gap-x-2 lg:gap-x-4">
        <div className="col-span-3 row-span-2 bg-dark-3 ">
          <div className="grid grid-cols-4 py-8 md:py-16 gap-x-4 gap-y-8 lg:gap-y-12">
            {technos.map((techno: TechStackType, index) => (
              <Tooltip
                id={techno.tecnoName}
                // theme="dark"
                tooltipContent={techno.tecnoName}
                key={index}
              >
                <Techno
                  key={index}
                  tecnoData={techno}
                  onSelectTechno={() => onSelectTechno(techno.tecnoName)}
                />
              </Tooltip>
            ))}
          </div>
          <ButtonLink
            href={ROUTE_PROJECTS}
            color="primary"
            classe="hidden md:block lg:mt-1"
          >
            View all projects
          </ButtonLink>
        </div>
        <div className="w-full h-full col-span-5 row-span-2 mt-2 md:mt-0">
          <div className="grid  h-full sm:grid-cols-2 sm:grid-rows-2 gap-y-1.5 self-center items-center sm:gap-2 lg:gap-3">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard projectData={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>

      <Button color="primary" classe="md:hidden mt-10">
        All projects
      </Button>
    </section>
  );
};

type TechnoProps = {
  tecnoData: TechStackType;
  onSelectTechno: (tecnoName: string) => void;
};

export function Techno({ tecnoData, onSelectTechno }: TechnoProps) {
  const { alt, src, tecnoName, sizeIcon, selected } = tecnoData;

  const [windowSize] = useResizeWindow();

  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      onClick={() => onSelectTechno(tecnoName)}
      className={clsx(
        "flex flex-col items-center justify-center space-y-3 text-center cursor-pointer group",
        selected && "border-2 border-primary py-3 px-0"
      )}
    >
      <Tooltip
        id={tecnoName}
        // theme="dark"
        tooltipContent={tecnoName}
        key={tecnoName}
      >
        <Image
          width={
            sizeIcon
              ? windowSize < SCREEN_SM
                ? sizeIcon - 15
                : sizeIcon
              : windowSize < SCREEN_SM
              ? 38
              : 50
          }
          alt={alt}
          src={src}
          className="block opacity-40 group-hover:opacity-60 animate"
        />
      </Tooltip>
      <span className="hidden text-xs text-light-dark font-Inter">
        {tecnoName}
      </span>
    </div>
  );
}
