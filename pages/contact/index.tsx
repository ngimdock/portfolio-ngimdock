import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { ContactBody, ProjectsBody } from "../../src/pagesContents";

export default function Contact() {
  return (
    <>
      <Metadata
        title={`Contact / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`Contacter ${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} ${
          process.env.NEXT_PUBLIC_MY_JOB
        } pour réaliser vos projets en développement des sites d'applications sur-mésure.`}
      />

      <Base>
        <ContactBody />
      </Base>
    </>
  );
}
