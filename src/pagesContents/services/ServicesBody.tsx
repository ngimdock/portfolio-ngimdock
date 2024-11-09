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
      text: "Home",
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
        title="Services I offer."
        description="Tailored web development to accelerate your product's growth online"
        buttonCTA={
          <ButtonLink href={ROUTE_CONTACT} color="primary">
            Get in touch
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
