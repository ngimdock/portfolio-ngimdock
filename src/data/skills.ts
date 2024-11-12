import { ROUTE_PROJECTS } from "../lib";

export type SkillType = {
  companyName: string;
  jobTitle: string;
  jobDescription: string;
  jobPeriod: string;
  jobLocation: string;
  jobLink: string;
  jobLinkText: string;
  jobLinkTargetBlack?: boolean;
};
export const REMOTE = "Remote";
type SkillNames = "Experiences";
export type Skill = {
  name: string;
  data: SkillType[];
};

const experiences: SkillType[] = [
  {
    companyName: "Bubo",
    jobTitle: "Frontend Developer",
    jobPeriod: "January 2024 - Present",
    jobLocation: "Remote - France",
    jobDescription:
      "Developing new frontend features for the application, writing unit and integration tests, conducting code reviews, and suggesting improvements.",
    jobLinkText: "Visit the company",
    jobLink: "https://www.linkedin.com/company/bubo-bubo/",
    jobLinkTargetBlack: true,
  },
  {
    companyName: "PILINK",
    jobTitle: "Fullstack Developer",
    jobPeriod: "October 2023 - Febuary 2024",
    jobLocation: "Remote - France",
    jobDescription:
      "Designed and developed from scratch, with full autonomy, a new collaboration platform that enhances interaction between students, educational institutions, and PILINK",
    jobLinkText: "Visit the company",
    jobLink: "https://www.linkedin.com/company/pilink/",
    jobLinkTargetBlack: true,
  },
  {
    companyName: "ACESY Ltd",
    jobTitle: "Software Engineer",
    jobPeriod: "Jully 2023 - November 2023",
    jobLocation: "Yaounde - Cameroun",
    jobDescription:
      "Worked on the design, modeling, and development of both the Frontend and Backend of the application.",
    jobLinkText: "Visit the company",
    jobLink: "https://www.linkedin.com/company/acesy/",
    jobLinkTargetBlack: true,
  },
  // {
  //   companyName: "Freelance",
  //   jobTitle: "Backend & Frontend",
  //   jobPeriod: "Septembre 2021 - Présent",
  //   jobLocation: REMOTE,
  //   jobDescription:
  //     "Au cours de plusieurs missions en freelance, j'ai travaillé principalement pour des start-up. Mon rôle était de développer les fonctionnalités des applications pour faire progresser le produit tout en étant d'une grande force de proposition.",
  //   jobLinkText: "consulter",
  //   jobLink: ROUTE_PROJECTS,
  // },

  // {
  //   companyName: "GDSC Yaounde 1",
  //   jobTitle: "Formateur web",
  //   jobPeriod: "Septembre 2020 - Juin 2021",
  //   jobLocation: "Université Yaounde 1",
  //   jobDescription:
  //     "Avoir été membre de l'équipe de formation web du Google développer Student Club de l'UY1 a été une expérience enrichissante. Notre mission était d'initier les débutants à la programmation grâce à des ateliers et des séminaires supervisés par Google. ",
  //   jobLinkText: "visiter",
  //   jobLink: "https://www.linkedin.com/in/ngimdock-zemfack/",
  //   jobLinkTargetBlack: true,
  // },
];

export const Formations: SkillType[] = [
  {
    companyName: "Universite Yaounde 1",
    jobTitle: "Bac + 4 genie logiciel",
    jobPeriod: "Semptembre 2017 - Juin 2023",
    jobLocation: "Yaoundé, Cameroun",
    jobDescription:
      "Je suis titulaire d'un BAC + 4 en génie logiciel et d'un BAC + 1 en mathématiques fondamentales dans l'une des meilleures universités d'Afrique centrale.",
    jobLinkText: "En savoir plus",
    jobLink: "https://www.linkedin.com/in/ngimdock-zemfack/",
    jobLinkTargetBlack: true,
  },
  // {
  //   companyName: "CloudAMQP",
  //   jobTitle: "Certifié RabbitMQ",
  //   jobPeriod: "Mai 2023 - Août 2023",
  //   jobLocation: "Online",
  //   jobDescription:
  //     "Concepts maîtrisés: Microservices, Connections, Channels, Queues, Exchanges,  Binding, Publisher confirm, Custommer acknowledgment, Prefetch, Alternate Exchange, Plugins, AMQP.",
  //   jobLinkText: "Consulter",
  //   jobLink:
  //     "https://training.cloudamqp.com/certificate/e1536a65-7c8e-4682-a080-8337ad7f2878",
  //   jobLinkTargetBlack: true,
  // },
  // {
  //   companyName: "Freecodecamp",
  //   jobTitle: "Certifications web",
  //   jobPeriod: "Janvier 2019 - Aout 2019",
  //   jobLocation: "Online",
  //   jobDescription:
  //     "J'accorde une grande importance à la formation continue. J'apprends régulièrement sur des plateformes en ligne, telles que  Freecodecomp, Udemy etc.",
  //   jobLinkText: "Consulter",
  //   jobLink: "https://www.freecodecamp.org/dan73",
  //   jobLinkTargetBlack: true,
  // },
];

export const Skills: Record<SkillNames, Skill> = {
  Experiences: {
    name: "Experiences",
    data: experiences,
  },

  // Formations: {
  //   name: "Education",
  //   data: Formations,
  // },
};
