import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import useIsInViewport from "use-is-in-viewport";
import { H2 } from "../../../components";
import { Project } from "../../../data";
import { Tags } from "../../../data/tags";
import { ProjectCard } from "../../../pagesCommonSections";
import { projectContext } from "../../../dataManager/context/projectContext";

const TOUS = "Tous";

export const AllProjects = () => {
  const { projects: all_projects } = useContext(projectContext);

  const [isInViewport, targetRef] = useIsInViewport();

  const tagsArray = Object.entries(Tags).map(([, tagName]) => ({
    name: tagName,
    selected: false,
  }));

  const tagsWithSelectedProp = Object.entries(Tags).map(([, tagName]) => ({
    name: tagName,
    selected: false,
  }));

  const allTags = [{ name: TOUS, selected: true }, ...tagsWithSelectedProp];

  const [tags, setTags] = useState(allTags);

  const [projects, setProjects] = useState(all_projects);

  function onSelectTag(tagName: string) {
    if (tagName === TOUS) {
      setTags(allTags);

      return setProjects(all_projects);
    }
    const tagsNoSelected = tags.map((techno) => ({
      ...techno,
      selected: false,
    }));

    tagsNoSelected.forEach((tag) => {
      if (tag.name === tagName) tag.selected = true;
    });

    const projectsWithSelectedTag = getProjectBuildWithTechno(
      all_projects,
      tagName
    );

    setTags(tagsNoSelected);

    setProjects(projectsWithSelectedTag);
  }

  function getProjectBuildWithTechno(projects: Project[], tagName: string) {
    return projects.filter((project) => {
      const foundedTag = project.tags.find((tag) => tag === tagName);

      return !!foundedTag;
    });
  }

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container separed-sections"
      )}
    >
      <H2 classe="text-center sm:text-start">Filtres</H2>

      <div className="flex flex-wrap items-center justify-center max-w-2xl mt-2 space-x-3 space-y-2 sm:justify-start">
        {tags.map((tag, index) => (
          <TagAllProject onSelectTag={onSelectTag} key={index} tagData={tag} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            projectData={project}
            key={index}
            config={{ tagNumber: 2, displayTag: true }}
          />
        ))}
      </div>
    </section>
  );
};

type TagAllProjectProps = {
  tagData: {
    name: string;
    selected: boolean;
  };
  onSelectTag: (tagName: string) => void;
};

const TagAllProject = ({ tagData, onSelectTag }: TagAllProjectProps) => {
  return (
    <div
      onClick={() => onSelectTag(tagData.name)}
      className={clsx(
        "py-2 px-6 text-light text-xs text-center bg-dark rounded-full cursor-pointer hover:border-primary hover:border animate",
        tagData.selected && "bg-primary text-light hover:border-none"
      )}
    >
      {tagData.name}
    </div>
  );
};
