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
    title: "développement backend",
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
    numberProject: "01+ personnes",
    desciption: `Apprendre à développer est très difficile, des tutoriels périmés, documentation difficile à parcourir. Vous pouvez passer plusieurs années d'apprentissage sans réellement progresser. Si vous êtes une entreprise ou une école de formation, je peux rapidement faire monter en compétences vos apprenants avec mes formations. Je leur apprends exactement ce dont ils ont besoin pour devenir des développeurs exceptionnels.`,
  },
];
