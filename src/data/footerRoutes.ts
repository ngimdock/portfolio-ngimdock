import { ReactNode } from "react";
import {
  ABOUT,
  CONTACT,
  FORMATIONS,
  HOME,
  PROJECTS,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_FORMATIONS,
  ROUTE_HOME,
  ROUTE_PROJECTS,
  ROUTE_SERVICES,
  ROUTE_SKILLS,
  SERVICES,
  SKILLS,
} from "../lib";

export type FooterRoute = {
  text: string;
  link: string;
  icon?: ReactNode;
};

export const FOOTER_ROUTES: FooterRoute[] = [
  {
    text: HOME,
    link: ROUTE_HOME,
  },
  {
    text: SERVICES,
    link: ROUTE_SERVICES,
  },

  {
    text: PROJECTS,
    link: ROUTE_PROJECTS,
  },

  {
    text: FORMATIONS,
    link: ROUTE_FORMATIONS,
  },

  {
    text: SKILLS,
    link: ROUTE_SKILLS,
  },

  {
    text: ABOUT,
    link: ROUTE_ABOUT,
  },
  {
    text: CONTACT,
    link: ROUTE_CONTACT,
  },
];
