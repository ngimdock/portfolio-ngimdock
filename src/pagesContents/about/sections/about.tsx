import clsx from "clsx";
import useIsInViewport from "use-is-in-viewport";
import { H2, Para } from "../../../components";
import ngimdock_photo from "../../../../public/assets/images/profile-pic2.png";
import Image from "next/image";
import {
  FlexSectionLeft,
  FlexSectionProps,
  FlexSectionRight,
} from "../../../pagesCommonSections/FlexSection";

export const About = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  const UPGRATE_SKILLS = {
    h2: "Monté en competences.",
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            voluptates hic impedit tempore, veritatis cum debitis ex,
            repudiandae incidunt magnam doloremque tenetur commodi maiores
            dignissimos odio, eaque molestiae voluptate facilis?`,
    image: "/assets/images/images.jpeg",
  };

  const HOOBIES = {
    h2: "Histoire et hobbies.",
    text: `Si j'était un animal sauvage, je serait sûrement un ours, l'ours de`,
    image: "/assets/images/images.jpeg",
  };

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container separed-sections flex flex-col space-y-16 sm:space-y-28"
      )}
    >
      <div className="flex flex-col-reverse items-center grid-cols-2 text-center sm:text-left sm:grid sm:gap-x-20">
        <div className="mt-6 sm:mt-0">
          <H2>Parcours tech.</H2>
          <Para>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            voluptates hic impedit tempore, veritatis cum debitis ex,
            repudiandae incidunt magnam doloremque tenetur commodi maiores
            dignissimos odio, eaque molestiae voluptate facilis?
          </Para>
        </div>

        <NgimdockImage />
      </div>

      <FlexSectionLeft
        data={UPGRATE_SKILLS}
        scrollEffect={true}
        paddingY={true}
      />

      <FlexSectionRight data={HOOBIES} scrollEffect={true} paddingY={true} />
    </section>
  );
};

type NgimdockImageProps = {
  classe?: string;
};

const NgimdockImage = ({ classe }: NgimdockImageProps) => {
  return (
    <section
      className={clsx(
        "animate w-full xs:w-[290px] md:w-[370px]  lg:w-[410px]",
        classe
      )}
    >
      <Image
        alt={
          process.env.NEXT_PUBLIC_MY_NAME
            ? process.env.NEXT_PUBLIC_MY_NAME
            : "ngimdock zemfack"
        }
        src={ngimdock_photo}
      />
    </section>
  );
};
