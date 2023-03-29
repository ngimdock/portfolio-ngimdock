import { reasonGithub, reasonLink } from "../enums";
import { Tags } from "./tags";
import { TECH_STACK, TechStackType } from "./techno";

const { nestjs, firebase, reactjs, tailwind, postgres, prisma } = TECH_STACK;

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
  };
  challenges?: Challenge[];
  images?: string[];
};

export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    featured: 2,
    name: "Ngimdock portfolio",
    description:
      "Une application web et mobile pour dématérialiser la délivrance des cartes nationales d'identités(cni) du cameroun.",
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
      problem: "The problem here",
      solution: "The sution here",
      myTasks: "My task here",
      techStack: [reactjs, tailwind, firebase],
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
    },
    images: [],
  },

  {
    id: 3,
    featured: 2,
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
    },
    images: ["image1", "image2"],
  },
];
