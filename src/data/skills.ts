import { ROUTE_PROJECTS } from "../lib";

export type SkillType = {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  jobPeriod: string;
  jobLocation: string;
  jobLink: string;
  jobLinkText: string;
};
export const REMOTE = "Remote";
type SkillNames = "Experiences" | "Formations";
export type Skill = {
  name: string;
  data: SkillType[];
};

const experiences: SkillType[] = [
  {
    companyName: "Freelance",
    jobTitle: "Backend & Frontend",
    jobPeriod: "Semptembre 2021 - present",
    jobLocation: REMOTE,
    jobDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit non quam officia velit provident at itaque eos nobis atque amet expedita dolor minus dolore.",
    jobLinkText: "consulter",
    jobLink: ROUTE_PROJECTS,
  },

  {
    companyName: "GDSC Yaounde 1",
    jobTitle: "Formateur web",
    jobPeriod: "Semptembre 2020 - Juin 2021",
    jobLocation: REMOTE,
    jobDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit non quam officia velit provident at itaque eos nobis atque amet expedita dolor minus dolore.",
    jobLinkText: "visiter",
    jobLink: "#",
  },
];

export const Formations: SkillType[] = [
  {
    companyName: "Universite Yaounde 1",
    jobTitle: "Bac + 5 genie logiciel",
    jobPeriod: "Semptembre 2017 - Juin 2023",
    jobLocation: "Yaoundé, Cameroun",
    jobDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit non quam officia velit provident at itaque eos nobis atque amet expedita dolor minus dolore.",
    jobLinkText: "consulter",
    jobLink: "#",
  },

  {
    companyName: "Freecadecamp",
    jobTitle: "Certifications web",
    jobPeriod: "Janvier 2019 - Aout 2019",
    jobLocation: "Remote",
    jobDescription:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit non quam officia velit provident at itaque eos nobis atque amet expedita dolor minus dolore.",
    jobLinkText: "visiter",
    jobLink: "#",
  },
];

export const Skills: Record<SkillNames, Skill> = {
  Experiences: {
    name: "Expériences",
    data: experiences,
  },

  Formations: {
    name: "Formations",
    data: Formations,
  },
};
