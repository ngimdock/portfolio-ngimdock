import Image from "next/image";
import ngimdock_photo from "../../../../public/assets/images/profile-pic2.png";
import { H2, Para } from "../../../components";
import { ALL_PROJECTS, Project } from "../../../data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TagBg } from "../../../components/tag-bg/tabBg";
import useIsInViewport from "use-is-in-viewport";
import clsx from "clsx";

export interface Props {
  project: Project;
}

export const NextProject = ({ project }: Props) => {
  const [isInViewport, targetRef] = useIsInViewport();

  const [nextProject, setNextProject] = useState<Project>(project);

  useEffect(() => {
    const secondProject = ALL_PROJECTS.find((p) => p.id === project.id + 1);

    if (!!secondProject) setNextProject(secondProject as Project);
    else
      setNextProject(
        ALL_PROJECTS.find((p) => p.id === project.id - 1) as Project
      );
  }, [project]);

  return (
    <Link
      href={`/projets/${nextProject.id}`}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "flex flex-col items-center mt-20 "
      )}
      ref={targetRef}
    >
      {nextProject.id > project.id ? (
        <H2>Projet suivant.</H2>
      ) : (
        <H2>Projet preccédent.</H2>
      )}
      <div className="grid items-center p-5 mt-5 border-4 gap-x-8 md:grid-cols-2 md:p-10 hover:border-primary/10 border-dark-3 animate">
        <div className="flex items-center justify-center">
          <Image
            src={`/assets/images/${nextProject.mainImage}`}
            alt={nextProject.description}
            width={450}
            height={300}
          />
        </div>

        <div className="flex flex-col items-center mt-4 text-center md:items-start md:text-start md:justify-start">
          <H2>{nextProject.name}</H2>
          <div className="mt-5 md:mt-10">
            <Para>{nextProject.description}</Para>
          </div>

          <div className="flex flex-wrap items-center justify-center mt-6 space-x-4 space-y-2 md:space-y-0">
            {nextProject.tags.slice(0, 3).map((tagName) => (
              <TagBg color="dark" size="md" key={tagName}>
                {tagName}
              </TagBg>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
