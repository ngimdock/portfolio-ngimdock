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
    <>
      <section
        ref={targetRef}
        className={clsx(
          isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv"
        )}
      >
        <div className="grid gap-5 mt-14 sm:grid-cols-2 md:gap-8 xl:gap-8">
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
        </div>
      </section>

      {project.challenges && (
        <section className={clsx("flex flex-col mt-12 space-y-8")}>
          {project.challenges.map((challenge, index) => (
            <ChallengeBox challenge={challenge} key={index} />
          ))}
        </section>
      )}
    </>
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

type ChallengeBoxProps = {
  challenge: {
    challengeTitle: string;
    challengeDescription: string;
    solutionTitle: string;
    solutionDescription: string;
  };
};

const ChallengeBox = ({ challenge }: ChallengeBoxProps) => {
  const {
    challengeTitle,
    challengeDescription,
    solutionTitle,
    solutionDescription,
  } = challenge;
  return (
    <article className="p-4 sm:p-8 bg-dark-3">
      <div className="flex flex-col max-w-4xl space-y-8">
        <div>
          <H2>Premier challenge</H2>
          <Para size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            explicabo ullam cupiditate cum consequuntur recusandae, ab iste,
            illo animi repellendus odit veniam atque. Error recusandae
            exercitationem sunt hic sequi earum?
          </Para>
        </div>

        <div>
          <H2>Résolution du challenge</H2>
          <Para size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            explicabo ullam cupiditate cum consequuntur recusandae, ab iste,
            illo animi repellendus odit veniam atque. Error recusandae
            exercitationem sunt hic sequi earum?
          </Para>
        </div>
      </div>
    </article>
  );
};
