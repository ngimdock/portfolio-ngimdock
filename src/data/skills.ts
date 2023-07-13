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
    jobPeriod: "Semptembre 2021 - présent",
    jobLocation: REMOTE,
    jobDescription:
      "J'ai effectué plusieurs missions en freelance généralement pour les start-up. Mes tâches étaient principalement de développer les feature des applications afin de faire évoluer le produit tout en étant d'une grande force de proposition.",
    jobLinkText: "consulter",
    jobLink: ROUTE_PROJECTS,
  },

  {
    companyName: "GDSC Yaounde 1",
    jobTitle: "Formateur web",
    jobPeriod: "Semptembre 2020 - Juin 2021",
    jobLocation: "Universite Yaounde 1",
    jobDescription:
      "Faire partir de l'équipe de formation web du Google développer Student Club de d'UY1 à été une belle expérience, nous avions pour mission de former les débutants en programmation à travers les workshops et des séminaires supervisés par google. Vous pouvez avoir plus de détails dans la section expériences de mon profil Linkedin.",
    jobLinkText: "visiter",
    jobLink: "https://www.linkedin.com/in/ngimdock-zemfack/",
  },
];

export const Formations: SkillType[] = [
  {
    companyName: "Universite Yaounde 1",
    jobTitle: "Bac + 4 genie logiciel",
    jobPeriod: "Semptembre 2017 - Juin 2023",
    jobLocation: "Yaoundé, Cameroun",
    jobDescription:
      "Après mon BAC+1 en mathématiques, j'ai décidé de reprendre mes études en informatique ou j'ai obtenu un BAC+4 en génie logiciel dans une des meilleures universités des technologies du Cameroun  🇨🇲",
    jobLinkText: "En savoir plus",
    jobLink: "https://www.linkedin.com/in/ngimdock-zemfack/",
  },

  {
    companyName: "Freecadecamp",
    jobTitle: "Certifications web",
    jobPeriod: "Janvier 2019 - Aout 2019",
    jobLocation: "Remote",
    jobDescription:
      "En plus de mes études, j'accorde une grande importance à la formation continue. J'apprends régulièrement sur des plateformes en ligne, telles que  Freecodecomp, Udemy etc. vous pouvez consulter mes certifications depuis le site de freecodecamp.",
    jobLinkText: "Consulter",
    jobLink: "https://www.freecodecamp.org/dan73",
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
