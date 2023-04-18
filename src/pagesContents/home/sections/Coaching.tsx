import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_COACHING } from "../../../lib";
import {
  FlexSectionLeft,
  FlexSectionData,
} from "../../../pagesCommonSections/FlexSection";

export const Coaching = () => {
  const DATA: FlexSectionData = {
    h3: "Formation",
    h2: "Je forme les futurs développeurs de ton entreprise / organisation.",
    image: "/assets/images/images.jpeg",
    text: `Au cours de mon parcours, j'ai acquis des compétences techniques et
            personnelles qui ne peuvent attendre d'être partagé. Je m'occupe de
            la formation des futurs développeurs de ton entreprise, je les
            enseigne tous ce qu'ils ont besoin pour développer des applications
            robustes.`,

    children: (
      <ButtonLink href={ROUTE_COACHING} color="primary" classe="mt-5">
        en savoir plus
      </ButtonLink>
    ),
  };

  return <FlexSectionLeft data={DATA} scrollEffect={true} />;
};
