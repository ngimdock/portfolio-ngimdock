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
    title: " soutient  d'équipes",
    numberProject: "03+ projets",
    desciption: `J'approte du sans noeuf a votre équippe en tant que développeur 
      front ou backend, tout en collaborant avec les autres membres de 
      l'équipe, je développe les fonctionnalités du projet les unes après 
      les aussi. Afin d'être en phase sur l'évolution du projet, 
      nous faisons une review de code des autres développeurs. `,
  },
  {
    icon: RiDatabase2Fill,
    title: "développement  backend",
    numberProject: "04+ projets",
    desciption: `Délegue moi le développement complet de la partie backend 
      de ton application. Je développe l'API, la teste, la document avec 
      une architecture scalable et en respectants toutes les bonnes 
      méthodologie de développement d'un logiciel puis 
      j'échange avec les développeur frontend pour qu'ils puisse bien tirer partie de son utilisation.`,
  },
  {
    icon: RiVideoFill,
    title: "formation & coaching",
    numberProject: "01+ personnes",
    desciption: `Vous avez besoin de former des développeurs le plus rapidement 
      possible tout en assurant la qualité de leur formation ? 
      Transmèttre mes compétences est une autre de mes passions. 
      Je ne vais pas juste les former de débutant à un niveau très élévé, 
      je vais aussi les encourager, les motiver les donner toutes les armes dont ils ont besoin pour devenir des bon développeurs.`,
  },
];
