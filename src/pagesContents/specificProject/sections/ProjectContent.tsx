import clsx from "clsx";
import { title } from "process";
import { ReactNode } from "react";
import useIsInViewport from "use-is-in-viewport";
import { H2, Para } from "../../../components";
import { Challenge, Project } from "../../../data";
import { TagBg } from "../../../components/tag-bg/tabBg";
import Image from "next/image";

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
          <Card
            title={`Stacks utilisées ${project.details.team ? "& Equipe" : ""}`}
          >
            <div className="flex flex-wrap items-center mt-8 gap-x-4 gap-y-2">
              {project.details.techStack.map((item, index) => (
                <TagBg color="dark" size="lg" key={index} textColor="">
                  {item.tecnoName}
                </TagBg>
              ))}
            </div>

            <Para size="sm" classe="mt-10">
              {project.details.team}
            </Para>
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
  challenge: Challenge;
};

const ChallengeBox = ({ challenge }: ChallengeBoxProps) => {
  const {
    challengeTitle,
    challengeDescription,
    solutionTitle,
    solutionDescription,
    solutionImage,
  } = challenge;
  return (
    <article className="p-4 sm:p-8 md:py-10 bg-dark-3 hover:-translate-y-4 animate">
      <div className="flex flex-col max-w-4xl space-y-8">
        <div>
          <H2>{challengeTitle}</H2>
          <Para size="sm">{challengeDescription}</Para>
        </div>

        <div>
          <H2>{solutionTitle}</H2>
          <Para size="sm">{solutionDescription}</Para>
          <div className="flex justify-between mt-6">
            {solutionImage && (
              <img
                alt={solutionTitle}
                src={`/assets/images/${solutionImage}`}
              />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
