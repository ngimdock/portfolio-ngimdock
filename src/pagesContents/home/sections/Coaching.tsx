import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_COACHING, ROUTE_FORMATIONS } from "../../../lib";
import {
  FlexSectionLeft,
  FlexSectionData,
} from "../../../pagesCommonSections/FlexSection";

export const Coaching = () => {
  const DATA: FlexSectionData = {
    h3: "Formations",
    h2: "Je forme les futurs développeurs de votre école / entreprise.",
    image: "coaching4.jpg",
    text: `Que vous soyez une école cherchant à former ses étudiants en développement web ou une entreprise désirant renforcer rapidement les compétences de ses développeurs, je suis là pour vous aider à atteindre vos objectifs. Je propose un programme d'accompagnement personnalisé, que ce soit en présentiel ou en ligne, pour répondre à vos besoins spécifiques.`,

    children: (
      <ButtonLink href={ROUTE_FORMATIONS} color="primary" classe="mt-5">
        en savoir plus
      </ButtonLink>
    ),
  };

  return <FlexSectionLeft data={DATA} scrollEffect={true} />;
};
