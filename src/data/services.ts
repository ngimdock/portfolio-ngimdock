import { RiDatabase2Fill, RiGroupFill, RiVideoFill } from "react-icons/ri";

export type OneServiceType = {
  icon: any;
  title: string;
  numberProject: string;
  desciption: string;
};

export const SERVICES: OneServiceType[] = [
  {
    icon: RiGroupFill,
    title: " soutient d'équipes",
    numberProject: "03+ projets",
    desciption:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendu assumenda, necessitatibus nam consequuntur reiciendis modi omni voluptatum earum facilis sunt quibusdam ex quis rerum debitis nihi obcaecati repudiandae enim corrupti.",
  },
  {
    icon: RiDatabase2Fill,
    title: "développement backend",
    numberProject: "04+ projets",
    desciption:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendu assumenda, necessitatibus nam consequuntur reiciendis modi omni voluptatum earum facilis sunt quibusdam ex quis rerum debitis nihi obcaecati repudiandae enim corrupti.",
  },
  {
    icon: RiVideoFill,
    title: "formation & coaching",
    numberProject: "01+ personnes",
    desciption:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendu assumenda, necessitatibus nam consequuntur reiciendis modi omni voluptatum earum facilis sunt quibusdam ex quis rerum debitis nihi obcaecati repudiandae enim corrupti.",
  },
];
