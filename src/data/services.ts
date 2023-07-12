import { RiDatabase2Fill, RiGroupFill, RiVideoFill } from "react-icons/ri";
import { ROUTE_FORMATIONS, ROUTE_SERVICES } from "../lib";

export type OneServiceType = {
  icon: any;
  title: string;
  numberProject: string;
  desciption: string;
};

export const SERVICES: OneServiceType[] = [
  {
    icon: RiGroupFill,
    title: " soutien  d'équipes",
    numberProject: "03+ projets",
    desciption: `Je mets mes compétences au service de votre équipe en tant que développeur 
    back et/ou frontend. Tout en collaborant avec les autres membres de l'équipe, je développe 
    et teste les fonctionnalités du projet de manière itérative. Nous travaillons en méthode 
    agile et je n'hésite pas d'être d'une grande force de proposition en vue de mes expériences 
    préccedentes.`,
  },
  {
    icon: RiDatabase2Fill,
    title: "développement  backend",
    numberProject: "04+ projets",
    desciption: `Confiez-moi le développement complet de la partie backend de votre application. 
    Je suis en charge de la conception, du développement et des tests de l'API, en utilisant 
    une architecture scalable et en respectant les meilleures méthodologies de développement 
    logiciel. Ensuite, je collabore avec les développeurs frontend pour qu'ils puissent exploiter 
    pleinement ses fonctionnalités.`,
  },
  {
    icon: RiVideoFill,
    title: "formation & coaching",
    numberProject: "01+ formation",
    desciption: `Trouver un bon formateur en développement web est compliqué, 
    certains développeurs sont très compétents mais n'ont pas une approche adaptée pour la 
    formation des débutants et cela peut impacter leur montée en compétence. 
    Je vous propose un programme d'accompagnement sur-mesure en fonction des profils des apprenants.
    ils se verront apprendre rapidement après chaque module de formation.`,
  },
];
