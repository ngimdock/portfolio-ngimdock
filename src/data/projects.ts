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
  typescript,
  graphql,
  typeorm,
  cleanArchi,
  cqrs,
  aws,
  redis,
  neo4j,
  reactNative,
  cypher,
  expo,
  superTest,
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
  craftmanchip,
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
    featured: 1,
    name: "S.Y.N.E.S",
    description:
      "Une application web pour la gestion des activités du Syndicat de l'Enseignement Supérieur du Cameroun.",
    mainImage: "synes-home.svg",
    tags: [
      craftmanchip,
      ingenirie,
      projetDequipe,
      backend,
      applicationWeb,
      Tags.nestjs,
    ],
    infos: {
      industrie: "Gouvernement",
      type: ProjectType.WEB_APP,
      publishDate: "22 janvier 2022",
      github: "https://github.com/ngimdock/vision-car-server",
      reasonForNoLink: reasonLink.notOnline,
    },
    details: {
      problem: `Le SYNES (Syndicat National des Enseignants du Supérieur du Cameroun) est une organisation 
                qui œuvre pour les droits et l’amélioration des conditions de travail des enseignants au Cameroun. 
                Ils souhaitent mettre en place un système informatique centralisé pour gérer leurs 
                activités et interagir avec toutes les parties impliquées. L'objectif principal est de garantir 
                la transparence dans la gestion des fonds et de tenir informés les membres de l'organisation des 
                évènements à venir.`,
      solution: `Nous avons proposé de développer une application web complète pour superviser diverses activités. Cette application est constituée de plusieurs modules, y compris un module de gestion des membres, ainsi qu'un autre pour la gestion des activités, incluant les communiqués, événements et sanctions. De plus, un module est consacré à la gestion des entrées financières de l'organisation, dans le but de garantir la transparence et la traçabilité des fonds.`,
      myTasks: `En tant que membre de l'équipe de développement backend, j'ai la responsabilité de concevoir l'architecture de l'application. Je propose de créer un backend avec une clean architecture. Pour cela, j'utilise des patterns de développement tels que le CQRS, le pattern repository et SOLID. Je suis en charge du développement des fonctionnalités de l'application, de la documentation ainsi que de la mise en ligne de certaines ressources comme les bases de données, afin de faciliter le travail d'équipe. Tout cela se fait dans le cadre d'une communication efficace avec les membres de l'équipe de développement frontend.`,
      techStack: [
        cleanArchi,
        nestjs,
        cqrs,
        typescript,
        postgres,
        redis,
        aws,
        typeorm,
        reactjs,
        tailwind,
      ],
      team: "L'équipe de développement est constitué de 5 membres dont 2 développeurs backend et 3 développeurs frontend.",
    },
    images: [
      "contributions.svg",
      "create-communiques.svg",
      "events.svg",
      "create-event.svg",
    ],
    challenges: [
      {
        challengeTitle: "Organigrame du SYNES",
        challengeDescription:
          "Le SYNES est constitué de plusieurs services comme le Congrès, le conseil national(CN), le bureau exécutif national(BEN), la coordination de l'institution d'enseignement supérieur(CSI), la section SYNES de l'établissement(SSE). Certains membres de ces services sont amenés à intéragire avec l'application.",
        solutionTitle: "Preview",
        solutionImage: "services.svg",
      },

      {
        challengeTitle: "Transparence dans la gestion des fonds.",
        challengeDescription:
          "L'objectif majeur du SYNES est de faciliter la consultation claire et accessible pour tous des fonds entrants et sortants du SYNES.",
        solutionTitle: "Preview",
        solutionDescription:
          "Cette interface permet d'ajouter une contribution financière d'un membre de l'organisation.",
        solutionImage: "transparence.svg",
      },
      {
        challengeTitle: "Activités du SYNES",
        challengeDescription:
          "Il est important d'informer tous les membres de SYNES des activités(Communiqués, évènements, sanctions) organisées afin de leur permettre de participer facilement.",
        solutionTitle: "Preview",
        solutionImage: "activites.svg",
      },
    ],
  },
  {
    id: 2,
    featured: 2,
    name: "C.N.I.C",
    description: `Un système  numérique efficace et pratique pour  la dématérialisation de la délivrance des 
      Cartes Nationales d'Identité (CNI) au Cameroun 🇨🇲.`,
    mainImage: "cnic-hero.svg",
    tags: [ingenirie, projetDequipe, backend, Tags.nestjs, Tags.reactjs],
    infos: {
      industrie: "Gouvernement",
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
        challengeTitle: "Enregistrement d'un citoyen.",
        challengeDescription: `Dans chaque commissariat, des agents vont se servir de l'application 
                              web pour enregistrer les citoyens désirant une carte nationale d'identité (CNI) numérique. Une fois 
                              l'enregistrement terminé, ils vont délivrer au citoyen un QR code et un 
                              numéro d'identification unique qu'il pourra utiliser pour visualiser sa CNI directement.`,
        solutionImage: "enregistrement.svg",
        solutionTitle: "Preview",
        solutionDescription:
          "Les informations personnelles d'un citoyen enregistré depuis l'application web.",
      },
      {
        challengeTitle: "Identification d'un citoyen.",
        challengeDescription: `Le citoyen pourra visualiser sa carte nationale d'identité après avoir scanné le code QR qui lui a été attribué au commissariat à l'aide de son smartphone. Il pourra également se servir de son numéro d'identification unique pour effectuer la même opération. Une fois la carte nationale d'identité affichée, il peut s'en servir pour se présenter aux forces de l'ordre ou aux autorités administratives.`,
        solutionTitle: "Preview",
        solutionImage: "identification.svg",
      },
      {
        challengeTitle: "Challenge technique",
        challengeDescription:
          "L'un des principaux défis auxquels nous avons été confrontés était de trouver un système astucieux pour résoudre cette problématique, notamment pour les situations où le citoyen ne dispose pas d'une bonne connexion internet ou ne dispose pas de smartphone pour visualiser sa carte.",
        solutionTitle: "Notre approche à ce challenge",
        solutionDescription:
          "Nous avons créé des fonctionnalités qui permettent aux citoyens de consulter leur carte nationale d'identité hors ligne, ainsi que de l'imprimer pour pouvoir l'utiliser si leur téléphone n'a plus de batterie ou s'ils n'en disposent pas.",
      },
    ],

    images: [
      "registration-step-1.svg",
      "registration-step-2.svg",
      "registration-step-3.svg",
    ],
  },

  {
    id: 3,
    featured: 3,
    name: "NTI-shop",
    description:
      "Une application e-commerce de vente des appareils électroniques.",
    mainImage: "hero-nti-4.svg",
    tags: [Tags.ingenirie, Tags.projetsSolo, applicationWeb, frontend],
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
    id: 4,
    featured: 4,
    name: "Food Diary",
    description:
      "Une application mobile pour recommander les aliments à consommer en vue de maintenir une bonne santé en fonction des aliments habituellement consommés par l'utilisateur.",
    mainImage: "hero-food-diary.svg",
    tags: [Tags.projetDequipe, Tags.backend, Tags.nestjs],
    infos: {
      industrie: "Alimentation",
      type: ProjectType.MOBILE_APP,
      publishDate: "22 janvier 2022",
      github: "https://github.com/INF4077-GROUP/foodDiary-server",
      reasonForNoLink: "Application non accessible sur le store.",
    },
    details: {
      problem: `Nous souhaitons mettre en place un système informatique qui va permettre le suivi de l'alimentation d'un utilisateur sur une base quotidienne de façon à pouvoir lui recommander, chaque semaine, les aliments à consommer pour maintenir une bonne santé.`,
      solution: `Pour y parvenir, nous avons développé une application mobile qui permet de collecter les informations sur ce qu'il mange tous les jours afin de lui recommander les aliments adaptés à sa consommation.`,
      myTasks:
        "En tant que membre de l'équipe de développement backend, ma mission consiste à réaliser la mise en place du projet from scratch, puis à le connecter à une base de données graph (Neo4j) pour assurer la persistance des données. En collaboration avec les autres membres de l'équipe, nous travaillons sur la conception de l'application, et j'apporte ma contribution au développement de ses différentes fonctionnalités.",
      techStack: [neo4j, cypher, typescript, nestjs, reactNative, expo],
    },
    challenges: [
      {
        challengeTitle: "Collection des informations sur l'alimentation.",
        challengeDescription:
          "Chaque jour, l'utilisateur devra enregistrer en fin de journée les informations suivantes : ce qu'il a mangé, ce qu'il a bu, s'il a fait du sport, ainsi que tout malaise éventuel ressenti après la combinaison de certains aliments.",
        solutionImage: "add-food.svg",
      },
      {
        challengeTitle: "Recommandation des aliments.",
        challengeDescription:
          "Afin de suggérer les aliments à consommer pour l'utilisateur, nous utiliserons un algorithme de recommandation probabiliste qui prend en compte les données de l'utilisateur ainsi que celles des autres utilisateurs de la plateforme.",
        solutionImage: "recommandations.svg",
      },
    ],
    images: [
      "authentication.svg",
      "food-diary-image-2.svg",
      "food-diary-image-3.svg",
      "food-diary-image-4.svg",
    ],
  },

  {
    id: 5,
    // featured: 2,
    name: "Ngimdock portfolio",
    description:
      "Mon portfolio pour présenter mes compétences et mes réalisations en tant qu'ingénieur logiciel.",
    mainImage: "hero-portfolio2.png",
    tags: [Tags.frontend, Tags.siteVitrine, Tags.projetsSolo, Tags.reactjs],
    infos: {
      industrie: "Informatique",
      type: ProjectType.SHOWCASE_WEBSITE,
      publishDate: "22 janvier 2022",
      link: "https://visio-zemfack.vercel.app/",
      reasonForNoGithub: reasonGithub.privateCode,
    },
    details: {
      problem: `Je souhaite mettre en avant mes compétences ainsi que l'ensemble des projets que j'ai réalisés ou auxquels j'ai participé en tant que membre de l'équipe de réalisation.`,
      solution: `J'ai créé un site web portfolio avec une expérience utilisateur agréable, qui expose de façon très détaillée l'ensemble de mes projets, ainsi que mes compétences et ma spécialisation dans le développement d'applications web.`,
      myTasks:
        "Le projet est réalisé de manière progressive. Tout d'abord, je conçois les designs sur Figma, ensuite je développe les kits d'interface utilisateur avant d'intégrer toutes les pages du design.",
      techStack: [typescript, nextjs, tailwind, vercel],
    },
    challenges: [],
    images: [],
  },

  {
    id: 6,
    name: "Vision Car.",
    description:
      "API Rest complète et Open Source pour une application de ventes  des voitures de luxe (+30 étoiles sur github). ",
    mainImage: "vision-car-hero.svg",
    tags: [backend, projetsSolo],
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
      solution: `J'ai créé une entreprise fictive nommée "Vision-Car" qui commercialise des voitures de 
                  luxe. Pour cela, j'ai identifié les fonctionnalités les plus importantes qu'une application 
                  similaire devrait proposer, notamment la gestion de l'authentification, des rôles des différents 
                  acteurs du système, de l'accès aux ressources de l'API avec des autorisations, ainsi que la gestion 
                  des commandes, des factures et des interactions entre les acteurs. J'ai également prévu la 
                  réalisation de tests unitaires et de tests de end en end, ainsi que le déploiement de 
                  l'application sur une plateforme PaaS telle que Render.`,
      myTasks: `J'ai implémenté toutes les fonctionnalités énumérées dans la section "solution" ci-dessus. De plus, j'ai créé quelques designs avec Figma pour présenter le projet de manière plus efficace.`,
      techStack: [nestjs, postgres, prisma, jest, superTest],
    },
    images: [
      "visoin-car-image-1.svg",
      "visoin-car-image-2.svg",
      "visoin-car-image-3.svg",
      "visoin-car-image-4.svg",
    ],
    challenges: [],
  },

  {
    id: 7,
    name: "Becon website",
    description:
      "Site vitrine de présentation des services de l'entreprise Beacon.",
    mainImage: "beacon.svg",
    tags: [Tags.projetsSolo, Tags.siteVitrine, Tags.frontend],
    infos: {
      industrie: "Informatique",
      type: ProjectType.SHOWCASE_WEBSITE,
      publishDate: "22 janvier 2022",
      link: "https://beacon-website-302ee.web.app/",
      reasonForNoGithub: reasonGithub.privateCode,
    },
    details: {
      problem:
        "L'entreprise Beacon souhaite faire connaître ses activités et ses services aux utilisateurs par le biais d'Internet.",
      solution:
        "J'ai conçu un site vitrine pour atteindre cet objectif afin de présenter l'entreprise et les services proposés aux clients potentiels.",
      myTasks:
        "Ma tâche consiste à intégrer les designs fournis par Beacon de manière à ce qu'ils soient responsives et s'adaptent à tous les différents types d'appareils.",
      techStack: [reactjs, tailwind, firebase],
    },
    images: [],
  },
  // {
  //   id: 6,
  //   featured: 4,
  //   name: "Business-Teach",
  //   description: "Une application pour trouver des répétiteurs au Cameroun.",
  //   mainImage: "images.jpeg",
  //   tags: [Tags.applicationWeb, Tags.projetDequipe, Tags.frontend],
  //   infos: {
  //     industrie: "Enseignement",
  //     type: ProjectType.WEB_APP,
  //     publishDate: "23 janvier 2022",
  //     link: "https://bteach-server.web.app/",
  //     github: "https://github.com/ngimdock/bteach",
  //   },
  //   details: {
  //     problem:
  //       "Le point de départ de ce projet était la participation à un programme de développement organisé par Google, où les participants devaient développer une application pour résoudre un problème concret dans leur pays.",
  //     solution:
  //       "Nous avons choisi d'intervenir dans le domaine de l'enseignement en créant une plateforme permettant aux personnes de trouver des professeurs particuliers sur mesure, en fonction de leur profil et  qualification.",
  //     myTasks:
  //       "Mon intervention principale a été durant la phase de développement des fonctionnalités, ainsi que la réalisation et l'intégration des maquettes.",
  //     techStack: [reactjs, tailwind, firebase],
  //   },
  //   images: [],
  // },
];
