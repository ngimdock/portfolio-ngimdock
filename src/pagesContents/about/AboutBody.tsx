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

  const userName = process.env.NEXT_PUBLIC_USER_NAME?.toLocaleLowerCase();

  return (
    <>
      <Header
        title={`Hey c'est ${userName}, l'ours de winterfell.`}
        description={`Je suis ${process.env.NEXT_PUBLIC_MY_NAME?.toLocaleLowerCase()} mais la plupart m'appelle ${userName}.`}
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
