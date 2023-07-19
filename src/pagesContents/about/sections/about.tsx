import clsx from "clsx";
import useIsInViewport from "use-is-in-viewport";
import { H2, Para } from "../../../components";
import ngimdock_photo from "../../../../public/assets/images/profile-pic2.png";
import Image from "next/image";
import { UpgrateSkill } from "./UpgrateSkill";
import { HistoryHobbies } from "./HistoryHobbies";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";

export const About = () => {
  const [isInViewport, targetRef] = useIsInViewport();
  const HOOBIES = {
    h2: "Histoires et Hobbies.",
    text: `Quand j'était encore gamin, je voulais dévenir acteur et ciné et tourner avec des grand acteurs comme will smith(Le même rêve que )`,
    image: "histoires-hobbies.jpeg",
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
            J&apos;ai écrit mes premières lignes de code sur papier en seconde.
            Après le BAC, je me suis vu refuser l&apos;admission en informatique
            par mon université avec pour raison que je n&apos;avais pas une
            excellente note en mathématiques au BAC. J&apos;ai dû débuter mes
            études en maths et obtenir mon BAC+1 dans cette filière afin de
            reprendre mes études en informatique jusqu&apos;à l&apos;obtention
            de mon bac+4. Pendant ce parcours j&apos;ai travaillé́ avec des amis
            et des entreprises sur plusieurs projets passionnants et rencontré
            des personnes formidables ❤️
          </Para>
        </div>

        <NgimdockImage />
      </div>

      <UpgrateSkill />

      <HistoryHobbies />
      <RotativeCircle />
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

const RotativeCircle = () => (
  <TagCloud
    options={(w: Window & typeof globalThis): TagCloudOptions => ({
      // radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
      radius: 280,
      useContainerInlineStyles: true,
      useItemInlineStyles: true,
      maxSpeed: "fast",
    })}
    onClick={(tag: string, ev: MouseEvent) => alert(tag)}
    onClickOptions={{ passive: true }}
  >
    {[
      "VSCode",
      "TypeScript",
      "React",
      "Preact",
      "Parcel",
      "Jest",
      "Next",
      "ESLint",
      "Framer Motion",
      "Three.js",
      "VSCode",
      "TypeScript",
      "React",
      "Preact",
      "Parcel",
      "Jest",
      "Next",
      "ESLint",
      "Framer Motion",
      "Three.js",
    ]}
  </TagCloud>
);
