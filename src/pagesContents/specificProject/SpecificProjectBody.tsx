import { Project } from "../../data";
import { CallToAction, Navbar } from "../../pagesCommonSections";
import { DEFAULT_CALL_TO_ACTION_DATA } from "../home/HomeBody";
import { ProjectContent } from "./sections/ProjectContent";
import { ProjectImages } from "./sections/ProjectImages";
import { SpecificProjectHeader } from "./sections/SpecificProjectHeader";

type SpecificProjectBodyProps = {
  project: Project;
};

export const SpecificProjectBody = ({ project }: SpecificProjectBodyProps) => {
  const images = project.details.images as string[];

  return (
    <section className="container">
      <Navbar />
      <SpecificProjectHeader project={project} />
      <ProjectContent project={project} />
      {images.length ? <ProjectImages images={images} /> : null}
      <CallToAction
        actionData={DEFAULT_CALL_TO_ACTION_DATA}
        classe="separed-sections"
      />
    </section>
  );
};
