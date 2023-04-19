import { reasonGithub, reasonLink } from "../enums";
import { Tags } from "./tags";
import { TECH_STACK, TechStackType } from "./techno";

const {
  nestjs,
  firebase,
  reactjs,
  tailwind,
  postgres,
  prisma,
  flutter,
  mongoDb,
  mongoose,
  render,
  vercel,
  stripe,
  jest,
} = TECH_STACK;

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
    team?: string;
  };
  challenges?: Challenge[];
  images?: string[];
};

export const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    featured: 1,
    name: "Vision Car.",
    description:
      "API Rest complete pour une application de ventes et gestion des voitures de luxe.",
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
      problem: `Je souhaite approfondir mes compétences et mettre en pratique l'ensembles 
      des nouvelles technologies que j'ai apprise. Je veux m'assurer de développer une 
      application qui contient des fonctionnalités très avancés et qui peut être utilisé
      dans le monde réel. Une application dont je vais m'occuper de toutes les phase les plusimportantes 
      du développement d'un logiciel: Analyse des besoin, conception, design, développement, test, documentation,
      deploiement.`,
      solution: `Pour y arriver, je me suis crée une entreprise fictive au nom de vision-car qui vend 
      des voitures de luxe. j'ai rescencé les fonctionnalités les plus importantes qu'une application 
      similaire aurait besoin, gestion de l'authentification, gestion des rôles des acteurs du système, 
      restreindre les access aux ressources de l'API avec des authorization, gestion de tous les acteurs, 
      commmandes, factures. Gestion de l'intéractivités entre les acteurs. tests unitaires et end to end, `,
      myTasks: `après j'ai réalisé la conception qui m'a permit de deduire le schema 
        de la BD. Ensuite je me suis mis à développer le backend du projet. En parallele du développement du backend, 
        je réalisait les maquettes du projet.`,
      techStack: [nestjs, reactjs, postgres, prisma, stripe, jest],
    },
    images: ["image1", "image2"],
  },

  {
    id: 2,
    featured: 2,
    name: "C.N.I.C",
    description: `Un système  numérique efficace et pratique pour  la dématérialisation de la délivrance des 
      Cartes Nationales d'Identité (CNI) au Cameroun 🇨🇲.`,
    mainImage: "images.jpeg",
    tags: [ingenirie, projetDequipe, backend, Tags.nestjs, Tags.reactjs],
    infos: {
      industrie: "Gouvernemment",
      type: ProjectType.engineering,
      publishDate: "22 janvier 2022",
      reasonForNoGithub: reasonGithub.privateCode,
      reasonForNoLink:
        "Le projet est un cours d'évaluation par le gouvernement camerounais",
    },
    details: {
      problem: `La problématique de délivrance des cartes nationales d'identité est 
        devenue une préoccupation majeure au Cameroun en raison des retards 
        accumulés avant la distribution de ces cartes. Cette situation a des 
        conséquences directes sur les citoyens qui risquent de rencontrer des 
        difficultés lors de voyages ou dans la constitution de dossiers administratifs etc. 
        Ainsi, il est nécessaire d'innover le système en proposant une solution moderne 
        qui facilite les démarches des citoyens tout en permettant au gouvernement de 
        réaliser des économies.`,
      solution: `Pour remédier à cette problématique, nous avons mis  en 
      place un système informatique simplifié permettant la délivrance de cartes nationales 
      d'identité numériques. Les informations de ces cartes pourront être obtenues en quelques 
      minutes et utilisées exclusivement via un smartphone, offrant ainsi une solution moderne 
      et pratique pour les citoyens. De plus, cette solution pourrait permettre au gouvernement 
      de réaliser des économies en réduisant les coûts liés à la production et à la distribution 
      des cartes au format papier.`,
      myTasks: `Au cours de ce projet passionnant, j'ai intervenu pendant les étapes de 
      conception et de développement. Après que nous avons mis en place les documents de 
      conception nécessaires, en tant que membre de l'équipe backend, j'ai initialisé et 
      interconnecter les technologies requises pour le projet côté serveur, définir une 
      architecture adaptée pour permettre une intégration facile des autres développeurs, 
      implémenter des blocs de code réutilisables pour assurer un style de développement 
      homogène par l'équipe, implémenter les fonctionnalités de l'API et des optimisations, 
      faire la review du travail de mes collègues et si possible proposer des pistes améliorations. 
      Communiquer avec l'équipe Frontend et Mobile pour une meilleure utilisation de l'API,  participer 
      aux réunions avec le MOA pour lui fournir plus d'informations sur le projet backend.`,
      techStack: [nestjs, reactjs, mongoDb, flutter, mongoose, render, vercel],
      team: "Notre équipe est constituée de 10 membres, dont 1 designer, 3 développeurs frontend, 2 développeurs backend, 3 développeurs mobiles et 1 développeur fullstack. ",
    },

    // challenges: [
    //   {
    //     challengeTitle: "Notre plus grand challenge",
    //     challengeDescription: `Notre MOA nous a présenté un projet à réaliser se résumant à une
    //     simple ligne : "mettre en place un système informatique pour dématérialiser la délivrance
    //     des CNI du Cameroun". Le projet était très succinct et nous disposions de peu
    //     d'informations pour proposer une solution. Il était donc nécessaire pour nous de partir
    //     de cette base simpliste pour concevoir et développer un nouveau système complet afin de
    //     mener à bien cette mission.`,
    //     solutionTitle: "La solution ingénieuse de l'équippe.",
    //     solutionDescription:
    //       "Nous avons commencé par réaliser plusieurs réunions entre membre de l'équippe pour définir les besoins du projet. Ensuite nous nous somme conserté pour définir la meilleur approche ou système à mettre en place pour répondre à ces besoins. Nous avons ensuit développé un prototype du système à mettre en place",
    //   },
    // ],

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
