import { createContext } from "react";
import { ALL_PROJECTS } from "../../data/projects";

export const projectContext = createContext({
  projects: ALL_PROJECTS,
});
