import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { SplashScreen } from "../../src/components/splashScreen/splashScreen";
import { Project } from "../../src/data";
import { SpecificProjectBody } from "../../src/pagesContents/specificProject/SpecificProjectBody";
import { projectContext } from "../../src/dataManager/context/projectContext";

type Props = {
  params: {
    projectId: string;
  };
};

const SpecificProject = () => {
  const { projects: all_projects } = useContext(projectContext);

  const router = useRouter();
  const { projectId } = router.query;

  const project = all_projects.find(
    (p) => p.id === Number(projectId)
  ) as Project;

  return (
    <>
      <Metadata
        title={`Projets / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`Consulter tous les projets réalisés par ${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} ${
          process.env.NEXT_PUBLIC_MY_JOB
        }.`}
      />

      <Base>
        {!project ? (
          <SplashScreen />
        ) : (
          <SpecificProjectBody project={project} />
        )}
      </Base>
    </>
  );
};

export default SpecificProject;
