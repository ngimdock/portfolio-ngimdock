import {
  RiBriefcaseLine,
  RiContactsLine,
  RiHomeHeartLine,
} from "react-icons/ri";
import { Button, RoutePathType, ScrollDown } from "../../components";
import { ROUTE_CONTACT, ROUTE_HOME, ROUTE_PROJECTS } from "../../lib";
import { Header } from "../../pagesCommonSections";
import { Contact } from "./sections/contact";

export const ContactBody = () => {
  const ROUTES_PATH: RoutePathType[] = [
    {
      id: 1,
      text: "accueil",
      link: ROUTE_HOME,
      icon: <RiHomeHeartLine />,
    },

    {
      id: 2,
      text: ROUTE_CONTACT,
      link: ROUTE_CONTACT,
      icon: <RiContactsLine />,
    },
  ];

  return (
    <>
      <Header
        title="Me contacter."
        description="Envoyez-moi un message ou écrivez-moi sur mes réseaux, je vous réponds dans la journée."
        buttonCTA={<ScrollDown />}
        routesPath={ROUTES_PATH}
      />

      <Contact />
    </>
  );
};
