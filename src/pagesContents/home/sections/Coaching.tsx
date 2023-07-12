import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_COACHING, ROUTE_FORMATIONS } from "../../../lib";
import {
  FlexSectionLeft,
  FlexSectionData,
} from "../../../pagesCommonSections/FlexSection";

export const Coaching = () => {
  const DATA: FlexSectionData = {
    h3: "Formations",
    h2: "Je forme les futurs développeurs de votre entreprise / organisation.",
    image: "formation_web.jpg",
    text: `Que vous soyez une école qui aimerait former ses étudiants en développement web ou une 
    entreprise qui souhaiterait faire monter en compétence ses développeurs rapidement, 
    je peux vous aider à atteindre vos objectifs avec mon programme d'accompagnement sur-mesure en présentiel ou en ligne.`,

    children: (
      <ButtonLink href={ROUTE_FORMATIONS} color="primary" classe="mt-5">
        en savoir plus
      </ButtonLink>
    ),
  };

  return <FlexSectionLeft data={DATA} scrollEffect={true} />;
};
