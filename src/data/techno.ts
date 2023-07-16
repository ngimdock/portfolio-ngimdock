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
  | "nestjs"
  | "postgres"
  | "prisma"
  | "mongoDb"
  | "mongoose"
  | "reactjs"
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
  | "graphql"
  | "typeorm"
  | "redis"
  | "cleanArchi"
  | "cqrs";

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

  nestjs: {
    tecnoName: "Nestjs",
    alt: "Nestjs",
    // src: "logos_nestjs_color.svg",
    src: logo_nestjs,
    sizeIcon: 38,
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
    sizeIcon: 44,
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
    src: logo_nextjs,
    link: "https://beta.nextjs.org/docs",
    sizeIcon: 63,
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
    src: logo_flutter,
    sizeIcon: 32,
    link: "https://jestjs.io/",
    setOpacity: false,
    selected: false,
  },

  graphql: {
    tecnoName: "GraphQL",
    alt: "GraphQL",
    src: logo_graphql,
    sizeIcon: 32,
    link: "https://graphql.org/",
    setOpacity: false,
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
  tailwind,
  neo4j,
  java,
  nextjs,
  render,
  socketio,
  graphql,
} = TECH_STACK;

export const TECHNOS: TechStackType[] = [
  typescript,
  firebase,
  tailwind,
  postgres,
  prisma,
  nestjs,
  nextjs,
  reactjs,
  socketio,
  mongoDb,
  aws,
  neo4j,
  java,
  render,
];

export const TECHNOS_FROTEND: TechStackType[] = [
  typescript,
  reactjs,
  tailwind,
  nextjs,
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
].map((tech) => ({
  ...tech,
  selected: false,
  sizeIcon: tech.sizeIcon && tech.sizeIcon + 12,
}));

export const TECHNOS_OTHERS: TechStackType[] = [aws, neo4j, java, render];

export const HEROTOP_STACK: TechStackType[] = [
  nestjs,
  postgres,
  graphql,
  reactjs,
  tailwind,
];

export const GOOD_PRACTICES = ["CLEAN ARCHI", "DDD", "CQRS", "SOLID"];
