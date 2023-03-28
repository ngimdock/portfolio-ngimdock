import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { SplashScreen } from "../../src/components/splashScreen/splashScreen";
import { ALL_PROJECTS, Project } from "../../src/data";
import { SpecificProjectBody } from "../../src/pagesContents/specificProject/SpecificProjectBody";

type Props = {
  params: {
    projectId: string;
  };
};

const SpecificProject = () => {
  const router = useRouter();
  const { projectId } = router.query;

  const project = ALL_PROJECTS.find(
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
