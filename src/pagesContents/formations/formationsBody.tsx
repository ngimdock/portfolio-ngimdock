import { RiBearSmileLine, RiHomeHeartLine } from "react-icons/ri";
import { RoutePathType, ScrollDown } from "../../components";
import { ROUTE_CONTACT, ROUTE_FORMATIONS, ROUTE_HOME } from "../../lib";
import { CallToAction, Header } from "../../pagesCommonSections";
import { FormationsModules } from "./sections/modules";
import { FormationPresentation } from "./sections/presentation";

export const FormationsBody = () => {
  const ROUTES_PATH: RoutePathType[] = [
    {
      id: 1,
      text: "Home",
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
          title: "Accélère la montée en compétence de tes apprenants",
          button: {
            text: "me contacter",
            link: ROUTE_CONTACT,
          },
          image: "pexels-cottonbro-studio-3584967.jpg",
        }}
        classe="separed-sections"
      />
    </>
  );
};
