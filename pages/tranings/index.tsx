import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { FormationsBody } from "../../src/pagesContents/formations/formationsBody";

export default function Formations() {
  return (
    <>
      <Metadata
        title={`Trainings / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} forme les futur développeurs web de ton entreprise.`}
      />

      <Base>
        <FormationsBody />
      </Base>
    </>
  );
}
