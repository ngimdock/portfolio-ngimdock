import { Base } from "../../src/Base";
import { Metadata } from "../../src/components";
import { ServicesBody } from "../../src/pagesContents";

export default function Services() {
  return (
    <>
      <Metadata
        title={`Services / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} met à votre disposition un ensemble de services dans le développement des sites et applications surmesure avec des technologies de pointe: nestjs - react.`}
      />

      <Base>
        <ServicesBody />
      </Base>
    </>
  );
}
