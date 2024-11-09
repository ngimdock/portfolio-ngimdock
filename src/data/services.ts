import { RiDatabase2Fill, RiGroupFill, RiVideoFill } from "react-icons/ri";
import { ROUTE_FORMATIONS } from "../lib";

export type OneServiceType = {
  icon: any;
  title: string;
  numberProject: string;
  desciption: string;
  link?: string;
};

export const SERVICES: OneServiceType[] = [
  {
    icon: RiGroupFill,
    title: "Web development",
    numberProject: "04+ projects",
    desciption: `I contribute my expertise as a frontend/fullstack developer, working collaboratively with the team to iteratively develop and test features. With an agile approach, I leverage my past experiences to provide valuable insights and proactive suggestions.`,
  },
  {
    icon: RiDatabase2Fill,
    title: "SaaS development",
    numberProject: "04+ projects",
    desciption: `Crafting scalable, secure, and user-focused software solutions tailored to your business needs. From design to deployment, I help you launch your application in under 3 months.`,
  },
  {
    icon: RiVideoFill,
    title: "Traning & coaching",
    numberProject: "01+ traning",
    desciption: `Finding the right web development trainer can be difficult. While some developers are highly experienced, they may not always have the teaching methods that resonate with beginners, slowing their progress. I provide a personalized training program designed for each learner, ensuring they gain skills quickly after every module.`,
    link: ROUTE_FORMATIONS,
  },
];
