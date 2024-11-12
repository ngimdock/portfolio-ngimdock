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
      text: "Home",
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
        title="Contact me."
        description="Drop me a message or reach out on my social media, and I'll reply within the day."
        buttonCTA={<ScrollDown />}
        routesPath={ROUTES_PATH}
      />

      <Contact />
    </>
  );
};
