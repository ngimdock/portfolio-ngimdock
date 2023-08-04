import { RiHomeHeartLine, RiStackLine } from "react-icons/ri";
import { Button, RoutePathType } from "../../components";
import { ROUTE_CONTACT, ROUTE_HOME, ROUTE_SKILLS } from "../../lib";
import {
  CallToAction,
  CallToACtionType,
  Header,
} from "../../pagesCommonSections";
import { DEFAULT_CALL_TO_ACTION_DATA } from "../home/HomeBody";
import { Experiences } from "./sections/Experiences";
import { Skill } from "./sections/Skill";
import { ButtonLink } from "../../components/botton/ButtonLink";

export const SkillsBody = () => {
  const ROUTES_PATH: RoutePathType[] = [
    {
      id: 1,
      text: "accueil",
      link: ROUTE_HOME,
      icon: <RiHomeHeartLine />,
    },

    {
      id: 2,
      text: ROUTE_SKILLS,
      link: ROUTE_SKILLS,
      icon: <RiStackLine />,
    },
  ];

  const cvCallToActionData: CallToACtionType = {
    title: "En savoir plus sur les compétences ?",
    button: {
      text: "Télécharger mon cv",
      link: process.env.NEXT_PUBLIC_MY_CV as string,
      targetBlack: true,
    },
    image: DEFAULT_CALL_TO_ACTION_DATA.image,
  };

  return (
    <>
      <Header
        routesPath={ROUTES_PATH}
        title="Mes compétences techniques."
        description="Ingénieur logiciel, javascript & typescript."
        buttonCTA={
          <ButtonLink
            href={process.env.NEXT_PUBLIC_MY_CV as string}
            targetBlack={true}
            color="primary"
          >
            Télécharger mon CV
          </ButtonLink>
        }
      />

      <Skill />

      <Experiences />

      <CallToAction actionData={cvCallToActionData} classe="separed-sections" />
    </>
  );
};
