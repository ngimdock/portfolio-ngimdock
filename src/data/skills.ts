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
    jobPeriod: "Septembre 2021 - Présent",
    jobLocation: REMOTE,
    jobDescription:
      "Au cours de plusieurs missions en freelance, j'ai travaillé principalement pour des start-up. Mon rôle était de développer les fonctionnalités des applications pour faire progresser le produit tout en étant d'une grande force de proposition.",
    jobLinkText: "consulter",
    jobLink: ROUTE_PROJECTS,
  },

  {
    companyName: "GDSC Yaounde 1",
    jobTitle: "Formateur web",
    jobPeriod: "Septembre 2020 - Juin 2021",
    jobLocation: "Université Yaounde 1",
    jobDescription:
      "Avoir été membre de l'équipe de formation web du Google développer Student Club de l'UY1 a été une expérience enrichissante. Notre mission était d'initier les débutants à la programmation grâce à des ateliers et des séminaires supervisés par Google. ",
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
      "Après avoir obtenu mon diplôme de mathématiques de niveau BAC+1, j'ai décidé de reprendre mes études en informatique. J'ai obtenu un diplôme de BAC+4 en génie logiciel dans l'une des meilleures universités de technologie du Cameroun  🇨🇲",
    jobLinkText: "En savoir plus",
    jobLink: "https://www.linkedin.com/in/ngimdock-zemfack/",
  },

  {
    companyName: "Freecadecamp",
    jobTitle: "Certifications web",
    jobPeriod: "Janvier 2019 - Aout 2019",
    jobLocation: "Remote",
    jobDescription:
      "En plus de mes études, j'accorde une grande importance à la formation continue. J'apprends régulièrement sur des plateformes en ligne, telles que  Freecodecomp, Udemy etc. Vous pouvez consulter mes certifications sur le site de Freecodecamp.",
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
