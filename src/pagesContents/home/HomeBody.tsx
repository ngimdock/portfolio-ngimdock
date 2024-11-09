import { Services } from "./sections/Services";
import { HeroTop } from "./sections/HeroTop";
import { Presentation } from "./sections/Presentation";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { CallToAction } from "../../pagesCommonSections";
import { ROUTE_CONTACT } from "../../lib";
import { Coaching } from "./sections/Coaching";

const DEFAULT_CALL_TO_ACTION_DATA = {
  image: "keyboard.jpg",
  // image: "keyboard.jpg",
  title: "Take your web project to the next level.",
  button: {
    link: ROUTE_CONTACT,
    text: "Get in touch",
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

      <Coaching />
      <CallToAction
        actionData={DEFAULT_CALL_TO_ACTION_DATA}
        classe="mt-20 xs:mt-28"
      />
    </>
  );
};
