import { reasonGithub, reasonLink } from "../enums";
import { Tags } from "./tags";
import { TECH_STACK, TechStackType } from "./techno";

const { nestjs, firebase, reactjs, tailwind, postgres, prisma, flutter } =
  TECH_STACK;

const {
  applicationWeb,
  backend,
  design,
  frontend,
  ingenirie,
  nestjs: nestjsTag,
  projetDequipe,
  projetsSolo,
  reactjs: reactjsTag,
  siteVitrine,
} = Tags;

export enum ProjectType {
  WEB_APP = "Application Web",
  MOBILE_APP = "Application Mobile",
  WEB_AND_MOBILE_APP = "Application Web/Mobile",
  SHOWCASE_WEBSITE = "Site Vitrine",
  TECHNICAL_TEST = "Tests Techniques",
  engineering = "Ingénierie",
}

interface Challenge {
  challengeTitle: string;
  challengeDescription: string;
  solutionTitle: string;
  solutionDescription: string;
}

export type Project = {
  id: number;
  featured?: 1 | 2 | 3 | 4;
  name: string;
  description: string;
  mainImage: string;
  tags: string[];
  infos: {
    industrie: string;
    type: ProjectType;
    link?: string;
    github?: string;
    reasonForNoLink?: string;
    reasonForNoGithub?: string;
    publishDate: string;
  };
  details: {
    problem: string;
    solution: string;
    myTasks: string;
    techStack: TechStackType[];
    team: string;
  };
  challenges?: Challenge[];
  images?: string[];
};

export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    featured: 1,
    name: "Vision Car",
    description:
      "Une application web et mobile pour dématérialiser la délivrance des cartes nationales d'identités(cni) du cameroun.",
    mainImage: "images.jpeg",
    tags: [ingenirie, projetsSolo, backend],
    infos: {
      industrie: "Informatique",
      type: ProjectType.SHOWCASE_WEBSITE,
      publishDate: "22 janvier 2022",
      github: "https://github.com/ngimdock/vision-car-server",
      reasonForNoLink: reasonLink.notOnline,
    },
    details: {
      problem: "The problem here",
      solution: "The sution here",
      myTasks: "My task here",
      techStack: [nestjs, reactjs, postgres, prisma],
    },
    images: ["image1", "image2"],
  },

  {
    id: 2,
    featured: 2,
    name: "C.N.I.C",
    description:
      "Un système numérique permetant la dématérialisation  des Carte Nationale d'Identité(CNI) du Cameroun 🇨🇲.",
    mainImage: "images.jpeg",
    tags: [ingenirie, projetDequipe, backend, Tags.nestjs, Tags.reactjs],
    infos: {
      industrie: "Gouvernemment",
      type: ProjectType.engineering,
      publishDate: "22 janvier 2022",
      reasonForNoGithub: reasonGithub.privateCode,
      reasonForNoLink:
        "Le projet est en cours d'évaluation par le gouvernnement Camerounais.",
    },
    details: {
      problem:
        "Le Cameroun rencontre un serieux problème de délivrance des carte nationnale d'identité dans les delaie prévu. Cette difficulté à une consequence directe sur la population qui ne peuvent éffectuer des démarches administratives.",
      solution:
        "Pour venir à bout de ce challenge nous avons pensé à un système informatique simple qui vas permettre de délivrer des CNI numérique qui pourons être uniquement avec un smartphone en quelques minutes.",
      myTasks: `Pour ce projet très passionant, j'ai intervenu pendant les étapes
       de conception et de développement côté serveur. Une fois que nous avons mis en 
       place les documents nécessaires de conception, en temps que membre de l'équippe  
       backend mon rôle était d'initialiser et interconnecter les technologies 
       nécessaire du projet, de définir une architecture adapté qui permettrons une intégration facile des collègues, d'implémenter les block de code réutilisables qui permettrons 
       aux autres développeurs backend un style de développement homogène, d'implementer 
       des fonctionnalités qui m'était assignés, de review le côte de mes collegues et 
       leurs des améliorations, de communiquer avec l'équipe Frontend et Mobile pour 
       leurs aider à tirer un bon parti de l'API, de participer aux reunions et donner 
       le compte rendu de l'avancement de projet côté backend.`,
      techStack: [nestjs, reactjs, postgres, prisma, flutter],
      team: "Notre équippe est constitués de 09 membres dont 1 designer, 2 développeurs frontend, 2 développeurs backend et 3 dévelopeurs mobiles et 1 développeur fullstack.",
    },

    challenges: [
      {
        challengeTitle: "Notre plus grand challenge",
        challengeDescription:
          "Une fois que notre MOA nous a fait part de l'institulé du projet(Mettre en place système informatique pour la dématérealisation des CNI du Cameroun), il était question pour nous de reflechir comment le système devais fonctionner dans ça globalité",
        solutionTitle: "La solution ingénieuse de l'équippe.",
        solutionDescription: "la solution ",
      },
    ],

    images: ["image1", "image2"],
  },

  {
    id: 3,
    featured: 2,
    name: "Ngimdock portfolio",
    description:
      "Mon site vitrine pour mettre en avant mes compétences de développeur d'applications web.",
    mainImage: "contact-call-to-action.jpg",
    tags: [Tags.frontend, Tags.siteVitrine, Tags.projetsSolo, Tags.reactjs],
    infos: {
      industrie: "Informatique",
      type: ProjectType.SHOWCASE_WEBSITE,
      publishDate: "22 janvier 2022",
      link: "https://visio-zemfack.vercel.app/",
      reasonForNoGithub: reasonGithub.privateCode,
    },
    details: {
      problem: `Bear est une entreprise de prestation des services dans 
        le développement des application web qui souhaite mettre en 
        avant ses réalisations afin obtenir des prospects qualifiers.`,
      solution: `Nous avons pensé à lui développer un site vitrine sur-mesure 
      avec une interface utilisateur agréable et adapté à ça clientèle.
      Le but principalece ici est de mettre en avant ses réa`,
      myTasks: "My task here",
      techStack: [reactjs, tailwind, firebase],
      team: "Team details",
    },
    challenges: [
      {
        challengeTitle: "Premier challenge",
        challengeDescription:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo ullam cupiditate cum consequuntur recusandae, ab iste",
        solutionTitle: "Résolution du challenge",
        solutionDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo ullam cupiditate cum consequuntur recusandae, ab iste, illo animi repellendus odit veniam atque. Error recusandae",
      },

      {
        challengeTitle: "Deuxième challenge",
        challengeDescription:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo ullam cupiditate cum consequuntur recusandae, ab iste",
        solutionTitle: "Résolution du challenge",
        solutionDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo ullam cupiditate cum consequuntur recusandae, ab iste, illo animi repellendus odit veniam atque. Error recusandae",
      },
    ],
    images: ["dan.png", "contact-call-to-action.jpg", "nest.png", "dan.png"],
  },

  {
    id: 2,
    featured: 4,
    name: "Business-Teach",
    description:
      "Une application web et mobile pour dématérialiser la délivrance des cartes nationales d'identités(cni) du cameroun.",
    mainImage: "images.jpeg",
    tags: [Tags.ingenirie, Tags.projetDequipe],
    infos: {
      industrie: "Informatique",
      type: ProjectType.WEB_APP,
      publishDate: "23 janvier 2022",
      link: "https://bteach-server.web.app/",
      github: "https://github.com/ngimdock/bteach",
    },
    details: {
      problem: "The problem here",
      solution: "The sution here",
      myTasks: "My task here",
      techStack: [reactjs, tailwind, firebase],
      team: "Team details",
    },
    images: [],
  },

  {
    id: 4,
    featured: 2,
    name: "NTI-shop",
    description:
      "Une application web et mobile pour dématérialiser la délivrance des cartes nationales d'identités(cni) du cameroun.",
    mainImage: "images.jpeg",
    tags: [Tags.ingenirie, Tags.projetsSolo],
    infos: {
      industrie: "Informatique",
      type: ProjectType.SHOWCASE_WEBSITE,
      publishDate: "22 janvier 2022",
      link: "https://nti-shop.web.app/",
      reasonForNoGithub: reasonGithub.privateCode,
    },
    details: {
      problem: "The problem here",
      solution: "The sution here",
      myTasks: "My task here",
      techStack: [reactjs, tailwind, firebase],
      team: "Team details",
    },
    images: ["image1", "image2"],
  },

  {
    id: 5,
    name: "Becon website",
    description:
      "Une application web et mobile pour dématérialiser la délivrance des cartes nationales d'identités(cni) du cameroun.",
    mainImage: "images.jpeg",
    tags: [Tags.projetsSolo],
    infos: {
      industrie: "Informatique",
      type: ProjectType.SHOWCASE_WEBSITE,
      publishDate: "22 janvier 2022",
      link: "https://beacon-website-302ee.web.app/",
      reasonForNoGithub: reasonGithub.privateCode,
    },
    details: {
      problem: "The problem here",
      solution: "The sution here",
      myTasks: "My task here",
      techStack: [reactjs, tailwind, firebase],
      team: "Team details",
    },
    images: ["image1", "image2"],
  },
];
