import { useState } from "react";
import { PROJECTS } from "../../lib";
import { projectContext as ProjectContext } from "../context/projectContext";
import { ALL_PROJECTS } from "../../data/projects";

export const ProjectContextProvider = ({ children }: { children: any }) => {
  const [projects, setProjects] = useState(ALL_PROJECTS);

  const contextValue = {
    projects,
  };

  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};
