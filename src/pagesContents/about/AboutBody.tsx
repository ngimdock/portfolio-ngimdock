import {
  RiBearSmileLine,
  RiHomeHeartLine,
  RiInformationLine,
} from "react-icons/ri";
import { Button, RoutePathType, ScrollDown } from "../../components";
import { ROUTE_ABOUT, ROUTE_HOME } from "../../lib";
import { CallToAction, Header } from "../../pagesCommonSections";
import { DEFAULT_CALL_TO_ACTION_DATA } from "../home/HomeBody";
import { About } from "./sections/about";

export const AboutBody = () => {
  const ROUTES_PATH: RoutePathType[] = [
    {
      id: 1,
      text: "accueil",
      link: ROUTE_HOME,
      icon: <RiHomeHeartLine />,
    },

    {
      id: 2,
      text: ROUTE_ABOUT,
      link: ROUTE_ABOUT,
      icon: <RiBearSmileLine />,
    },
  ];

  return (
    <>
      <Header
        title="Hello, moi c'est dan."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, lacinia conse"
        buttonCTA={
          <div className="flex justify-center ">
            <ScrollDown />
          </div>
        }
        routesPath={ROUTES_PATH}
      />

      <About />

      <CallToAction
        actionData={DEFAULT_CALL_TO_ACTION_DATA}
        classe="separed-sections"
      />
    </>
  );
};
