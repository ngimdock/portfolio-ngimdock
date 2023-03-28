import Image from "next/image";
import { H2, H4, Para, ScrollDown, Tag } from "../../../components";
import img from "../../../../public/assets/images/dan-md.png";
import { SimpleScrollDown } from "../../../components/scrollDown/SimpleScrollDown";
import Link from "next/link";
import { TagBg } from "../../../components/tag-bg/tabBg";
import { RiGithubFill, RiLinksLine } from "react-icons/ri";
import useIsInViewport from "use-is-in-viewport";
import clsx from "clsx";
import { Project } from "../../../data";
import { Tooltip } from "../../../components/tooltip/Tooltip";

type SpecificProjectHeaderProps = {
  project: Project;
};

export const SpecificProjectHeader = ({
  project,
}: SpecificProjectHeaderProps) => {
  const [isInViewport, targetRef] = useIsInViewport();

  const projectGithub = (
    <TagBg color="dark" size="sm">
      <RiGithubFill />
      <span>github</span>
    </TagBg>
  );

  const projectLink = (
    <TagBg color="green" size="sm">
      <RiLinksLine />
      <span>visiter</span>
    </TagBg>
  );

  return (
    <section className="mt-20 md:mt-36">
      <header className="container items-center grid-cols-2 md:space-x-5 md:grid ">
        <div>
          <div>
            <div className="flex flex-wrap items-center justify-center space-x-3 space-y-1.5 md:justify-start">
              {project.tags.map((tagName) => (
                <TagBg color="dark" size="md" key={tagName}>
                  {tagName}
                </TagBg>
              ))}
            </div>
            <div className="mt-8 text-center md:text-left">
              <H2>{project.name}</H2>
              <Image
                src={`/assets/images/${project.mainImage}`}
                alt="project image"
                width={400}
                height={400}
                className="w-full h-auto my-10 md:hidden"
              />
              <Para classe="max-w-xl">{project.description}</Para>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-14">
            <ScrollDown />
          </div>
        </div>

        <Image
          src={`/assets/images/${project.mainImage}`}
          alt="project image"
          width={400}
          height={400}
          className="hidden w-full h-auto md:inline-block"
        />
      </header>

      <div
        ref={targetRef}
        className={clsx(
          isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
          "grid grid-cols-1 py-10 mt-20 gap-y-10 xs:grid-cols-2 lg:grid-cols-4 bg-dark-3"
        )}
      >
        <InfoBanner title="Industrie">{project.infos.industrie}</InfoBanner>
        <InfoBanner title="Type de project">{project.infos.type}</InfoBanner>
        <InfoBanner title="Date de livraison">
          {project.infos.publishDate}
        </InfoBanner>
        <InfoBanner title="Consulter le projet">
          <div className="flex items-center justify-center mt-2 space-x-2 text-xs font-Inter">
            {project.infos.github ? (
              <a href={project.infos.github} target="_blank" rel="noreferrer">
                {projectGithub}
              </a>
            ) : (
              <Tooltip
                tooltipContent={project.infos.reasonForNoGithub}
                id="reasonNotGithub"
              >
                <div className="hidden hover:cursor-not-allowed hover:opacity-80 animate sm:block">
                  {projectGithub}
                </div>
              </Tooltip>
            )}

            {project.infos.link ? (
              <a href={project.infos.link} target="_blank" rel="noreferrer">
                {projectLink}
              </a>
            ) : (
              <Tooltip
                tooltipContent={project.infos.reasonForNoLink}
                id="reasonNotLink"
              >
                <div className="hidden hover:cursor-not-allowed hover:opacity-80 animate md:block">
                  {projectLink}
                </div>
              </Tooltip>
            )}
          </div>
        </InfoBanner>
      </div>
    </section>
  );
};

type InfoBannerType = {
  title: string;
  children: React.ReactNode | string;
};

const InfoBanner = ({ title, children }: InfoBannerType) => {
  return (
    <div className="text-center">
      <H4>{title}</H4>
      <div className="mt-2.5 text-light">
        {typeof children === "string" ? (
          <span className="block text-xs font-Inter">{children}</span>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </div>
  );
};
