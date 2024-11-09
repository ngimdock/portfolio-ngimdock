import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { ProjectsBody } from "../../src/pagesContents";

export default function Projects() {
  return (
    <>
      <Metadata
        title={`Projets / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`Consulter tous les projets réalisés par ${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} ${
          process.env.NEXT_PUBLIC_MY_JOB
        }.`}
      />

      <Base>
        <ProjectsBody />
      </Base>
    </>
  );
}
