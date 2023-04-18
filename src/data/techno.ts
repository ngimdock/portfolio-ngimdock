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
  | "reactjs"
  | "tailwind"
  | "firebase"
  | "aws"
  | "neo4j"
  | "render"
  | "nextjs"
  | "java"
  | "socketio"
  | "flutter";

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
    tecnoName: "Fullter",
    alt: "https://flutter.dev/",
    src: logo_flutter,
    sizeIcon: 32,
    link: "https://flutter.dev/",
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
  firebase,
];

export const TECHNOS_BACKEND: TechStackType[] = [
  nestjs,
  postgres,
  prisma,
  mongoDb,
  socketio,
].map((tech) => ({
  ...tech,
  selected: false,
  sizeIcon: tech.sizeIcon && tech.sizeIcon + 5,
}));

export const TECHNOS_OTHERS: TechStackType[] = [aws, neo4j, java, render];

export const HEROTOP_STACK: TechStackType[] = [
  nestjs,
  postgres,
  prisma,
  reactjs,
  tailwind,
];
