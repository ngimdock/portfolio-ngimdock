import { RiBearSmileLine, RiHomeHeartLine } from "react-icons/ri";
import { RoutePathType, ScrollDown } from "../../components";
import { ROUTE_FORMATIONS, ROUTE_HOME } from "../../lib";
import { CallToAction, Header } from "../../pagesCommonSections";
import { DEFAULT_CALL_TO_ACTION_DATA } from "../home/HomeBody";

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
        description="Je forme les futurs talents de ton entreprise "
        buttonCTA={
          <div className="flex justify-center ">
            <ScrollDown />
          </div>
        }
        routesPath={ROUTES_PATH}
      />

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        asperiores, in cumque perspiciatis odio optio adipisci, dicta libero,
        enim velit natus? Totam numquam a cum, et amet at? Amet, illum.
      </p>

      <CallToAction
        actionData={DEFAULT_CALL_TO_ACTION_DATA}
        classe="separed-sections"
      />
    </>
  );
};
