import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_COACHING, ROUTE_FORMATIONS } from "../../../lib";
import {
  FlexSectionLeft,
  FlexSectionData,
} from "../../../pagesCommonSections/FlexSection";

export const Coaching = () => {
  const DATA: FlexSectionData = {
    h3: "Training",
    h2: "I train the future developers of your school/company.",
    image: "coaching4.jpg",
    text: `Whether you're a school looking to train students in web development or a company aiming to quickly upskill your developers, I'm here to help you achieve your goals. I offer a personalized coaching program, available both in-person and online, tailored to your specific needs.`,

    children: (
      <ButtonLink href={ROUTE_FORMATIONS} color="primary" classe="mt-5">
        Learn more
      </ButtonLink>
    ),
  };

  return <FlexSectionLeft data={DATA} scrollEffect={true} />;
};
