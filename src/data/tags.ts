import { TECH_STACK } from "./techno";

export const Tags = {
  backend: "Backend",
  craftmanchip: "Craftsmanship",
  nestjs: TECH_STACK.nestjs.tecnoName,
  ingenirie: "Ingénierie",
  projetsSolo: "Projet solo",
  projetDequipe: "Projet d'équipe",
  frontend: "Frontend",
  applicationWeb: "Application web",
  design: "Design",
  siteVitrine: "Site vitrine",
  reactjs: TECH_STACK.reactjs.tecnoName,
} as const;

// export const Tags = {
//   frontend: "Frontend",
//   applicationWeb: "Web applications",
//   backend: "Backend",
//   projetDequipe: "Team projects",
//   craftmanchip: "Craftsmanship",
//   reactjs: TECH_STACK.reactjs.tecnoName,
//   design: "Design",
//   siteVitrine: "Simple websites",
//   nestjs: TECH_STACK.nestjs.tecnoName,
// } as const;
