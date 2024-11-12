import { RiBriefcaseLine, RiHomeHeartLine } from "react-icons/ri";
import { RoutePathType } from "../../components";
import { ButtonLink } from "../../components/botton/ButtonLink";
import { ROUTE_CONTACT, ROUTE_HOME, ROUTE_PROJECTS } from "../../lib";
import { CallToAction, Header } from "../../pagesCommonSections";
import { DEFAULT_CALL_TO_ACTION_DATA } from "../home/HomeBody";
import { AllProjects } from "./sections";
import { FeaturedProjects } from "./sections/FeaturedProjects";

export const ProjectsBody = () => {
  const ROUTES_PATH: RoutePathType[] = [
    {
      id: 1,
      text: "Home",
      link: ROUTE_HOME,
      icon: <RiHomeHeartLine />,
    },

    {
      id: 2,
      text: ROUTE_PROJECTS,
      link: ROUTE_PROJECTS,
      icon: <RiBriefcaseLine />,
    },
  ];

  return (
    <>
      <Header
        title="View all my projects."
        description=" A selection of projects I've developed or contributed to as part of
        the development team."
        buttonCTA={
          <ButtonLink href={ROUTE_CONTACT} color="primary">
            Get in touch
          </ButtonLink>
        }
        routesPath={ROUTES_PATH}
      />
      <FeaturedProjects />

      <AllProjects />

      <CallToAction
        actionData={DEFAULT_CALL_TO_ACTION_DATA}
        classe="mt-24 sm:mt-28"
      />
    </>
  );
};
