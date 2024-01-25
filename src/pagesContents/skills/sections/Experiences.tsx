import clsx from "clsx";
import Link from "next/link";
import { RiLinksLine } from "react-icons/ri";
import { H2, Para } from "../../../components";
import { Skill, Skills, SkillType } from "../../../data";

export const Experiences = () => {
  return (
    <div className="flex flex-col space-y-20">
      {Object.entries(Skills).map(([, skill], index) => (
        <SkillSection key={index} skill={skill} />
      ))}
    </div>
  );
};

type SkillCardProps = {
  skillData: SkillType;
};

type SkillSectionProps = {
  skill: Skill;
};

const SkillSection = ({ skill }: SkillSectionProps) => {
  return (
    <section className={clsx("container mt-24 lg:mt-14")}>
      <H2>{skill.name}</H2>

      <div className="flex flex-col space-y-5">
        {skill.data.map((skill, index) => (
          <SkillCard key={index} skillData={skill} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = ({ skillData }: SkillCardProps) => {
  const {
    companyName,
    jobDescription,
    jobLink,
    jobLinkText,
    jobLocation,
    jobPeriod,
    jobTitle,
    jobLinkTargetBlack,
  } = skillData;
  return (
    <article className="px-3 py-6 mt-5 bg-dark-3 sm:px-8 hover:-translate-y-3 animate">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div>
          <H2 size="sm">{companyName}</H2>
          <span className="text-sm font-bold font-Inter text-primary">
            {jobTitle}
          </span>
        </div>

        <div className="sm:text-right mt-1.5 sm:mt-0">
          <h4 className="text-xs font-Inter text-light">{jobPeriod}</h4>
          <span className="text-xs font-bold font-Inter text-light">
            {jobLocation}
          </span>
        </div>
      </div>

      <Para size="sm" classe="mt-5 sm:max-w-[78%]">
        {jobDescription}
      </Para>

      <div className="flex mt-5 sm:justify-end">
        <Link
          href={jobLink ? jobLink : ""}
          target={jobLinkTargetBlack ? "_blank" : "_self"}
          className="flex items-center space-x-2 text-sm text-right text-light font-Inter hover:text-primary animate"
        >
          <RiLinksLine /> <span>{jobLinkText}</span>
        </Link>
      </div>
    </article>
  );
};
