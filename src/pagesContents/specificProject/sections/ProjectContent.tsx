import clsx from "clsx";
import { title } from "process";
import { ReactNode } from "react";
import useIsInViewport from "use-is-in-viewport";
import { H2, Para } from "../../../components";
import { Project } from "../../../data";

type ProjectContentProps = {
  project: Project;
};

export const ProjectContent = ({ project }: ProjectContentProps) => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "grid gap-5 mt-14 sm:grid-cols-2 md:gap-8 xl:gap-8"
      )}
    >
      <Card title="Le problème">{project.details.problem}</Card>
      <Card title="La solution">{project.details.solution}</Card>
      <Card title="Ma mission">{project.details.myTasks}</Card>
      <Card title="Stacks utilisées">
        <div>
          {project.details.techStack.map((item, index) => (
            <span key={index} className="mr-2">
              {item.tecnoName}
            </span>
          ))}
        </div>
      </Card>
    </section>
  );
};

type CardPops = {
  title: string;
  primaryTitle?: boolean;
  children: string | ReactNode;
};

export const Card = ({ title, children, primaryTitle }: CardPops) => {
  return (
    <article className="p-4 pt-10 rounded hover:-translate-y-4 animate xs:p-6 md:p-10 xs:pt-12 md:pt-20 bg- bg-dark-3">
      {!primaryTitle ? <H2>{title}</H2> : <H2 color="primary">{title}</H2>}

      {typeof children === "string" ? (
        <Para size="sm">{children}</Para>
      ) : (
        children
      )}
    </article>
  );
};
