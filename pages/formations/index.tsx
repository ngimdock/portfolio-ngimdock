import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";

export default function Formations() {
  return (
    <>
      <Metadata
        title={`Formations / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`Consulter tous les projets réalisés par ${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} ${
          process.env.NEXT_PUBLIC_MY_JOB
        }.`}
      />

      <Base>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          debitis rem totam odio odit? Magnam aliquam tenetur quidem veniam quia
          tempora consequuntur ipsum neque ea sit. Saepe provident quaerat eius!
        </p>
      </Base>
    </>
  );
}
