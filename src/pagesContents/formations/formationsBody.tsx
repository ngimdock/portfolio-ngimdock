import { RiBearSmileLine, RiHomeHeartLine } from "react-icons/ri";
import { RoutePathType, ScrollDown } from "../../components";
import { ROUTE_CONTACT, ROUTE_FORMATIONS, ROUTE_HOME } from "../../lib";
import { CallToAction, Header } from "../../pagesCommonSections";
import { DEFAULT_CALL_TO_ACTION_DATA } from "../home/HomeBody";
import { FormationsModules } from "./sections/modules";
import { FormationPresentation } from "./sections/presentation";

export const FormationsBody = () => {
  const ROUTES_PATH: RoutePathType[] = [
    {
      id: 1,
      text: "accueil",
      link: ROUTE_HOME,
      icon: <RiHomeHeartLine />,
    },

    {
      id: 2,
      text: ROUTE_FORMATIONS,
      link: ROUTE_FORMATIONS,
      icon: <RiBearSmileLine />,
    },
  ];
  return (
    <>
      <Header
        title="Formation en développement web"
        description="Je forme les futurs développeurs de ton entreprise."
        buttonCTA={
          <div className="flex justify-center ">
            <ScrollDown />
          </div>
        }
        routesPath={ROUTES_PATH}
      />

      <FormationPresentation />

      <FormationsModules />

      <CallToAction
        actionData={{
          title:
            "Accelère la monté en compétence des développeurs de ta boîte.",
          button: {
            text: "me contacter",
            link: ROUTE_CONTACT,
          },
          image: "images.jpeg",
        }}
        classe="separed-sections"
      />
    </>
  );
};
