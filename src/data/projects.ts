import next from "next/types";
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
  nextjs,
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

export interface Challenge {
  challengeTitle: string;
  challengeDescription: string;
  solutionTitle?: string;
  solutionDescription?: string;
  solutionImage?: string;
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

    challenges: [
      {
        challengeTitle: "Challenge rencontré.",
        challengeDescription: `Trouver le système informatique pour numériser la délivrance de ces cartes nationales d'identité a été notre plus grand défi.`,
        solutionTitle: "La solution ingénieuse de l'équippe.",
        solutionDescription: `Nous nous sommes organisés en équipe afin de trouver une solution à proposer. 
        Après trois réunions au cours desquelles nous avons discuté et fait des propositions entre 
        membres, nous sommes convenus de mettre en place un système constitué de trois 
        applications : une application frontend, une application mobile et une application backend. 
        L'application frontend permettra une gestion des utilisateurs par les différents commissariats,
         tandis que l'application mobile permettra à chaque utilisateur du système d'accéder à sa CNI 
         via un QR-code fourni par le commissariat. Enfin, l'application backend fournira les API 
         nécessaires aux deux applications clientes.`,
      },
    ],

    images: [],
  },

  {
    id: 2,
    featured: 1,
    name: "Vision Car.",
    description:
      "API Rest complete pour une application de ventes et gestion des voitures de luxe.",
    mainImage: "images.jpeg",
    tags: [ingenirie, projetsSolo, backend],
    infos: {
      industrie: "E-commerce",
      type: ProjectType.WEB_APP,
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
    images: ["contact-call-to-action.jpg", "dan.png"],
    challenges: [
      {
        challengeTitle: "Premier challenge",
        challengeDescription:
          "Un des plus grand challenge sur ce projet à été d'éffectuer une bonne conception de la base de donnée.",
        solutionTitle: "Solution de conception",
        solutionDescription:
          "J'ai réalisé un MCD(Modèle Conceptuel de Donnée) évolutif que j'ai pu mettre en place après avoir bien définir les besoins du projet. Le schema de la BD est très adapté s'adapte facilement à des mises à jour.",
        solutionImage: "contact-call-to-action.jpg",
      },
    ],
  },

  {
    id: 3,
    featured: 2,
    name: "Ngimdock portfolio",
    description:
      "Mon portfolio pour mettre en avant ses compétences de développeurs web auprès de mes potentiels clients.",
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
      problem: `Bear est une entreprise de prestation des services dans le développement 
      des applications web qui souhaite mettre en avant ses réalisations afin d'obtenir 
      des prospects qualifiers.`,
      solution: `J'ai pensé à lui développer un site vitrine sur mesure avec une 
      interface utilisateur agréable et adaptée à sa clientèle. Le but principal 
      ici est de mettre en avant ses réalisations.`,
      myTasks:
        "Je suis chargé de développer en toute autonomie le projet dans sa globalité,  réalisation des maquettes, implémentation avec les technologies modernes, optimisation des performances, mise en ligne et maintenance.",
      techStack: [nextjs, tailwind, firebase],
    },
    challenges: [
      {
        challengeTitle: "Premier challenge",
        challengeDescription:
          "Développer un site avec une interface et  expérience utilisateur remarquable.",
        solutionTitle: "Résolution du challenge",
        solutionDescription:
          "Je me suis inspiré de plusieurs sites en ligne afin de mettre en place les maquettes du projet sur figma, en utilisant un framwork comme nextjs, la vitesse de chargement du site est excellente et je mise aussi sur l'accessibilité et le referencement naturel.",
        solutionImage: "contact-call-to-action.jpg",
      },
    ],
    images: ["dan.png", "contact-call-to-action.jpg", "nest.png", "dan.png"],
  },

  {
    id: 4,
    featured: 2,
    name: "NTI-shop",
    description:
      "Une application e-commerce de vente des appareils électroniques.",
    mainImage: "hero-nti-4.svg",
    tags: [Tags.ingenirie, Tags.projetsSolo],
    infos: {
      industrie: "E-commerce",
      type: ProjectType.WEB_APP,
      publishDate: "22 janvier 2022",
      link: "https://nti-shop.web.app/",
      reasonForNoGithub: reasonGithub.privateCode,
    },
    details: {
      problem:
        "Le commerçant souhaite accroître son chiffre d'affaires en augmentant les ventes des appareils. Pour y parvenir, il aimerait exposer ses produits à une clientèle plus étendue sur internet afin de la fidéliser et ainsi réaliser des ventes en ligne en plus de celle de ses boutiques physiques",
      solution: `Pour l'aider à atteindre ses objectifs, j'ai proposé de développer une application web pour gérer 
        sa boutique en ligne. Cette application comporte une interface d'administration lui permettant 
        de gérer les produits, leurs catégories et également de proposer des suggestions d'appareils aux clients. Les 
        clients pourront s'inscrire sur la plateforme, sauvegarder des appareils, les commander et les partager 
        avec d'autres personnes.`,
      myTasks:
        "Je suis en charge du développement de l'application depuis l'étape de la réalisation des designs jusqu'à la mise en ligne du site. Je propose des fonctionnalités au commençant en fonction de ses objectifs.",
      techStack: [reactjs, tailwind, firebase],
    },
    images: [
      "categories.svg",
      "products.svg",
      "footer.svg",
      "account.svg",
      "hero-nti-4.svg",
      "details.svg",
    ],
    challenges: [
      {
        challengeTitle: "L'interface d'administration.",
        challengeDescription:
          "Le commerçant va créer les produits et leurs catégories depuis cette interface, elle va être connectée à l'API firebase de gestion des bases de données(Firestore) en ligne pour la sauvegarde et restitution des données.",
        solutionTitle: "preview",
        solutionImage: "nti-admin.svg",
      },
      {
        challengeTitle: "La documentation intégrée",
        challengeDescription:
          "L'interface d'administration contient une documentation intégrée pour faciliter son utilisation.",
        solutionTitle: "preview",
        solutionImage: "documentation.svg",
      },
    ],
  },

  {
    id: 5,
    featured: 4,
    name: "Business-Teach",
    description: "Une application pour trouver des répétiteurs au Cameroun.",
    mainImage: "images.jpeg",
    tags: [Tags.applicationWeb, Tags.projetDequipe, Tags.frontend],
    infos: {
      industrie: "Enseignement",
      type: ProjectType.WEB_APP,
      publishDate: "23 janvier 2022",
      link: "https://bteach-server.web.app/",
      github: "https://github.com/ngimdock/bteach",
    },
    details: {
      problem:
        "Le point de départ de ce projet était la participation à un programme de développement organisé par Google, où les participants devaient développer une application pour résoudre un problème concret dans leur pays.",
      solution:
        "Nous avons choisi d'intervenir dans le domaine de l'enseignement en créant une plateforme permettant aux personnes de trouver des professeurs particuliers sur mesure, en fonction de leur profil et  qualification.",
      myTasks:
        "Mon intervention principale a été durant la phase de développement des fonctionnalités, ainsi que la réalisation et l'intégration des maquettes.",
      techStack: [reactjs, tailwind, firebase],
    },
    images: [],
  },

  {
    id: 6,
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
    images: [],
  },
];
