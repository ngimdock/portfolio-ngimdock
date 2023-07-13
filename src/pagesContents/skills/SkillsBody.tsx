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
    title: "Besoin de plus de détails sur mes expériences ?",
    button: {
      text: "Télécharger mon cv",
      action: () => console.log("dawnload cv.."),
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
          <ButtonLink href={ROUTE_CONTACT} color="primary">
            me contacter
          </ButtonLink>
        }
      />

      <Skill />

      <Experiences />

      <CallToAction actionData={cvCallToActionData} classe="separed-sections" />
    </>
  );
};
