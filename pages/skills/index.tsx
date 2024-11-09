import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { SkillsBody } from "../../src/pagesContents";

export default function Projects() {
  return (
    <>
      <Metadata
        title={`Compétences / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`Compétences, technologies et expériences de ${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()}.`}
      />

      <Base>
        <SkillsBody />
      </Base>
    </>
  );
}
