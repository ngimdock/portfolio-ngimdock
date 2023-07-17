import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { AboutBody } from "../../src/pagesContents";

export default function APropos() {
  return (
    <>
      <Metadata
        title={`À propos / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`En savoir plus sur ${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} ${
          process.env.NEXT_PUBLIC_MY_JOB
        }.`}
      />

      <Base>
        <AboutBody />
      </Base>
    </>
  );
}
