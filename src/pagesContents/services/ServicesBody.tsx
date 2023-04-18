import { RiFileList3Line, RiHomeHeartLine } from "react-icons/ri";
import { RoutePathType } from "../../components";
import { ButtonLink } from "../../components/botton/ButtonLink";
import { ROUTE_CONTACT, ROUTE_HOME, ROUTE_SERVICES } from "../../lib";
import { CallToAction, Header } from "../../pagesCommonSections";
import { DEFAULT_CALL_TO_ACTION_DATA } from "../home/HomeBody";
import { AllServices } from "./sections/allservices";

export const ServicesBody = () => {
  const ROUTES_PATH: RoutePathType[] = [
    {
      id: 1,
      text: "accueil",
      link: ROUTE_HOME,
      icon: <RiHomeHeartLine />,
    },

    {
      id: 2,
      text: ROUTE_SERVICES,
      link: ROUTE_SERVICES,
      icon: <RiFileList3Line />,
    },
  ];

  return (
    <>
      <Header
        title="Prestation des services"
        description="Du développement web sur-mesure pour faire décoller ton produit sur le web."
        buttonCTA={
          <ButtonLink href={ROUTE_CONTACT} color="primary">
            me contacter
          </ButtonLink>
        }
        routesPath={ROUTES_PATH}
      />

      <AllServices />

      <CallToAction
        actionData={DEFAULT_CALL_TO_ACTION_DATA}
        classe="separed-sections"
      />
    </>
  );
};
