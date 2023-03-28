import { Services } from "./sections/Services";
import { HeroTop } from "./sections/HeroTop";
import { Presentation } from "./sections/Presentation";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { CallToAction } from "../../pagesCommonSections";
import { ROUTE_CONTACT } from "../../lib";

export const DEFAULT_CALL_TO_ACTION_DATA = {
  // image: "contact-call-to-action.jpg",
  image: "keyboard.jpg",
  title: "Fait passer ton projet web au niveau supérieur.",
  button: {
    link: ROUTE_CONTACT,
    text: "Me contacter",
  },
};

export const HomeBody = () => {
  return (
    <>
      <HeroTop />
      <Presentation />
      <Services />
      <Projects />
      <About />
      <CallToAction
        actionData={DEFAULT_CALL_TO_ACTION_DATA}
        classe="mt-20 xs:mt-32 sm:mt-12"
      />
    </>
  );
};
