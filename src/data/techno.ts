import logo_nestjs from "../../public/assets/svg/logos_nestjs_color.svg";
import logo_postgres from "../../public/assets/svg/logos_postgresql_color.svg";
import logo_prisma from "../../public/assets/svg/logo_prisma_color.svg";
import logo_react from "../../public/assets/svg/logo_react_color.svg";
import logo_tailwind from "../../public/assets/svg/logo_tailwind_color.svg.svg";
import logo_amazon from "../../public/assets/svg/logo_amazon.svg";
import logo_mongodb from "../../public/assets/svg/logo_mongodb.svg";
import logo_neo4j from "../../public/assets/svg/logo_neo4j.svg";
import logo_typescript from "../../public/assets/svg/logo_typescript.svg";
import logo_firebase from "../../public/assets/svg/logo-firebase_color.svg";
import logo_java from "../../public/assets/svg/logo_java.svg";
import logo_nextjs from "../../public/assets/svg/logos_nextjs2.svg";
import logo_render from "../../public/assets/svg/simple-icons_render.svg";
import logo_socketio from "../../public/assets/svg/logos_socket-io.svg";
import logo_flutter from "../../public/assets/svg/logo_flutter.svg";
import logo_mongoose from "../../public/assets/svg/logo_mongoose.svg";
import logo_graphql from "../../public/assets/svg/logos_graphql.svg";
import logos_typeorm from "../../public/assets/svg/logos_typeorm.svg";
import logos_clean_archi from "../../public/assets/svg/CleanArchitecture.svg";
import logos_cqrs from "../../public/assets/svg/cqrs.svg";
import logos_redis from "../../public/assets/svg/logos_redis.svg";
import logos_expo from "../../public/assets/svg/logos_expo.svg";
import logos_jest from "../../public/assets/svg/logos_jest.svg";
import logos_nodejs from "../../public/assets/svg/logos_nodejs-icon.svg";
import logos_expressjs from "../../public/assets/svg/logo_express.svg";
import logos_rabbitmq from "../../public/assets/svg/devicon_rabbitmq.svg";
import logos_elasticsearch from "../../public/assets/svg/logos_elasticsearch.svg";
import logos_kubernetes from "../../public/assets/svg/logos_kubernetes.svg";
import logos_nextjs14 from "../../public/assets/svg/devicon_nextjs.svg";
import logos_react_query from "../../public/assets/svg/logos_react-query-icon.svg";

export type TechStackType = {
  tecnoName: string;
  alt: string;
  src: string;
  sizeIcon?: number;
  setOpacity?: boolean;
  link: string;
  selected: boolean;
};

export type TechStackNames =
  | "typescript"
  | "nodejs"
  | "nestjs"
  | "postgres"
  | "prisma"
  | "mongoDb"
  | "mongoose"
  | "expressjs"
  | "reactjs"
  | "reactNative"
  | "reactQuery"
  | "tailwind"
  | "firebase"
  | "aws"
  | "neo4j"
  | "render"
  | "nextjs"
  | "java"
  | "socketio"
  | "flutter"
  | "vercel"
  | "stripe"
  | "jest"
  | "kubernetes"
  | "superTest"
  | "graphql"
  | "typeorm"
  | "redis"
  | "cleanArchi"
  | "cqrs"
  | "cypher"
  | "expo"
  | "rabbitMq"
  | "elasticSearch"
  | "reactQuery";

export const TECH_STACK: Record<TechStackNames, TechStackType> = {
  typescript: {
    tecnoName: "Typescript",
    alt: "Typescript",
    // src: "logo_typescript.svg",
    src: logo_typescript,
    sizeIcon: 36,
    setOpacity: false,
    link: "https://www.typescriptlang.org/",
    selected: false,
  },
  nodejs: {
    tecnoName: "Nodejs",
    alt: "Nodejs",
    src: logos_nodejs,
    sizeIcon: 30,
    setOpacity: false,
    link: "https://nodejs.org/",
    selected: false,
  },
  nestjs: {
    tecnoName: "Nestjs",
    alt: "Nestjs",
    // src: "logos_nestjs_color.svg",
    src: logo_nestjs,
    sizeIcon: 36,
    setOpacity: true,
    link: "https://nestjs.com/",
    selected: true,
  },

  postgres: {
    tecnoName: "Postgres",
    alt: "Postgres",
    // src: "logo_prisma_color.svg",
    src: logo_postgres,
    sizeIcon: 33,
    setOpacity: true,
    link: "https://www.postgresql.org/",
    selected: false,
  },

  prisma: {
    tecnoName: "Prisma",
    alt: "Prisma",
    // src: "logo_prisma_color.svg",
    src: logo_prisma,
    sizeIcon: 43,
    setOpacity: false,
    link: "http://prisma.io/",
    selected: false,
  },

  mongoDb: {
    tecnoName: "MongoDb",
    alt: "MongoDb",
    // src: "logo_mongodb.svg",
    src: logo_mongodb,
    setOpacity: false,
    link: "https://www.mongodb.com/",
    selected: false,
  },

  mongoose: {
    tecnoName: "Mongoose",
    alt: "Mongoose",
    // src: "logo_mongodb.svg",
    src: logo_mongoose,
    setOpacity: false,
    link: "https://mongoosejs.com/",
    selected: false,
  },

  expressjs: {
    tecnoName: "Expressjs",
    alt: "Expressjs",
    src: logos_expressjs,
    sizeIcon: 30,
    setOpacity: false,
    link: "https://expressjs.com/",
    selected: false,
  },

  reactjs: {
    tecnoName: "Reactjs",
    alt: "Reactjs",
    // src: "logo_react_color.svg",
    src: logo_react,
    sizeIcon: 41,
    setOpacity: true,
    link: "https://react.dev/",
    selected: false,
  },

  reactNative: {
    tecnoName: "React Native",
    alt: "react-native",
    src: logo_react,
    sizeIcon: 41,
    setOpacity: true,
    link: "https://reactnative.dev/",
    selected: false,
  },

  reactQuery: {
    tecnoName: "React Query",
    alt: "react-query",
    src: logos_react_query,
    sizeIcon: 41,
    setOpacity: true,
    link: "https://tanstack.com/",
    selected: false,
  },

  tailwind: {
    tecnoName: "Tailwind",
    alt: "Tailwind",
    // src: "logo_tailwind_color.svg.svg",
    src: logo_tailwind,
    sizeIcon: 43,
    setOpacity: true,
    link: "https://tailwindcss.com/",
    selected: false,
  },

  firebase: {
    tecnoName: "Firebase",
    alt: "Firebase",
    // src: "logo-firebase_color.svg",
    src: logo_firebase,
    sizeIcon: 38,
    setOpacity: false,
    link: "https://firebase.google.com/",
    selected: false,
  },

  aws: {
    tecnoName: "aws",
    alt: "aws",
    src: logo_amazon,
    link: "https://aws.amazon.com/",
    setOpacity: false,
    sizeIcon: 45,
    selected: false,
  },

  nextjs: {
    tecnoName: "Nextjs",
    alt: "Nextjs",
    src: logos_nextjs14,
    link: "https://beta.nextjs.org/docs",
    sizeIcon: 38,
    selected: false,
  },

  neo4j: {
    tecnoName: "neo4j",
    alt: "neo4j",
    src: logo_neo4j,
    sizeIcon: 60,
    setOpacity: false,
    link: "https://neo4j.com/",
    selected: false,
  },

  java: {
    tecnoName: "java",
    alt: "java",
    src: logo_java,
    sizeIcon: 35,
    link: "https://docs.oracle.com/en/java/",
    setOpacity: false,
    selected: false,
  },

  render: {
    tecnoName: "Render",
    alt: "Render",
    src: logo_render,
    sizeIcon: 28,
    link: "https://render.com/",
    setOpacity: false,
    selected: false,
  },

  socketio: {
    tecnoName: "Socket.io",
    alt: "Socket.io",
    src: logo_socketio,
    sizeIcon: 32,
    link: "https://socket.io/",
    setOpacity: false,
    selected: false,
  },

  flutter: {
    tecnoName: "Flutter",
    alt: "https://flutter.dev/",
    src: logo_flutter,
    sizeIcon: 28,
    link: "https://flutter.dev/",
    setOpacity: false,
    selected: false,
  },

  vercel: {
    tecnoName: "Vercel",
    alt: "Vercel",
    src: logo_flutter,
    sizeIcon: 32,
    link: "https://vercel.com/",
    setOpacity: false,
    selected: false,
  },

  stripe: {
    tecnoName: "Stripe",
    alt: "Stripe",
    src: logo_flutter,
    sizeIcon: 32,
    link: "https://stripe.com/fr-us",
    setOpacity: false,
    selected: false,
  },

  jest: {
    tecnoName: "Jest",
    alt: "Jest",
    src: logos_jest,
    sizeIcon: 26,
    link: "https://jestjs.io/",
    setOpacity: false,
    selected: false,
  },

  kubernetes: {
    tecnoName: "kubernetes",
    alt: "kubernetes",
    src: logos_kubernetes,
    sizeIcon: 29,
    link: "https://kubernetes.io/",
    setOpacity: false,
    selected: false,
  },

  superTest: {
    tecnoName: "supertest",
    alt: "supertest",
    src: logos_jest,
    sizeIcon: 32,
    link: "https://www.npmjs.com/package/supertest",
    setOpacity: false,
    selected: false,
  },

  graphql: {
    tecnoName: "GraphQL",
    alt: "GraphQL",
    src: logo_graphql,
    sizeIcon: 30,
    link: "https://graphql.org/",
    setOpacity: true,
    selected: false,
  },
  typeorm: {
    tecnoName: "TypeOrm",
    alt: "TypeOrm",
    src: logos_typeorm,
    sizeIcon: 32,
    link: "https://typeorm.io/",
    setOpacity: false,
    selected: false,
  },
  redis: {
    tecnoName: "Redis",
    alt: "Redis",
    src: logos_redis,
    sizeIcon: 32,
    link: "https://redis.io/docs/",
    setOpacity: false,
    selected: false,
  },
  cleanArchi: {
    tecnoName: "Clean archi",
    alt: "Clean architecture",
    src: logos_clean_archi,
    sizeIcon: 32,
    link: "https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",
    setOpacity: false,
    selected: false,
  },
  cqrs: {
    tecnoName: "CQRS",
    alt: "CQRS",
    src: logos_cqrs,
    sizeIcon: 32,
    link: "https://docs.nestjs.com/recipes/cqrs",
    setOpacity: false,
    selected: false,
  },
  cypher: {
    tecnoName: "Cypher",
    alt: "Cypher",
    src: logo_neo4j,
    sizeIcon: 32,
    link: "https://neo4j.com/docs/getting-started/cypher-intro/",
    setOpacity: false,
    selected: false,
  },
  expo: {
    tecnoName: "Expo",
    alt: "Expo",
    src: logos_expo,
    link: "https://expo.io/",
    selected: false,
    sizeIcon: 32,
  },
  rabbitMq: {
    tecnoName: "RabbitMQ",
    alt: "RabbitMQ",
    src: logos_rabbitmq,
    link: "https://www.rabbitmq.com/",
    selected: false,
    sizeIcon: 28,
    setOpacity: true,
  },
  elasticSearch: {
    tecnoName: "ElasticSearch",
    alt: "ElasticSearch",
    src: logos_elasticsearch,
    link: "https://www.elastic.co/",
    selected: false,
    sizeIcon: 26,
  },
} as const;

const {
  typescript,
  aws,
  firebase,
  mongoDb,
  postgres,
  nestjs,
  prisma,
  reactjs,
  reactQuery,
  tailwind,
  neo4j,
  java,
  nextjs,
  render,
  socketio,
  graphql,
  redis,
  nodejs,
  jest,
  kubernetes,
  rabbitMq,
  elasticSearch,
} = TECH_STACK;

export const TECHNOS: TechStackType[] = [
  typescript,
  postgres,
  tailwind,
  redis,
  mongoDb,
  nestjs,
  nextjs,
  aws,
  prisma,
  graphql,
  rabbitMq,
  reactjs,
  kubernetes,
  firebase,

  // socketio,
  // elasticSearch,
];

export const TECHNOS_FROTEND: TechStackType[] = [
  typescript,
  nextjs,
  reactjs,
  tailwind,
  reactQuery,
].map((tech) => ({
  ...tech,
  selected: false,
  sizeIcon: tech.sizeIcon && tech.sizeIcon + 10,
}));

export const TECHNOS_BACKEND: TechStackType[] = [
  nestjs,
  postgres,
  graphql,
  mongoDb,
  aws,
  nodejs,
  rabbitMq,
  redis,
  kubernetes,
  firebase,
  // elasticSearch,
  // expressjs,
].map((tech) => ({
  ...tech,
  selected: false,
  sizeIcon: tech.sizeIcon && tech.sizeIcon + 12,
}));

export const TECHNOS_OTHERS: TechStackType[] = [aws, neo4j, java, render];

export const HEROTOP_STACK: TechStackType[] = [
  reactjs,
  nextjs,
  nestjs,
  postgres,
  graphql,
  // aws,
  // tailwind,
];

export const GOOD_PRACTICES = [
  "Clean Archi",
  "DDD",
  "CQRS",
  "Tests unitaires",
  "Microservices",
  // "SOLID",
];
