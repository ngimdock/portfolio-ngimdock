import clsx from "clsx";
import useIsInViewport from "use-is-in-viewport";
import { H2, Para } from "../../../components";
import ngimdock_photo from "../../../../public/assets/images/profile-pic2.png";
import Image from "next/image";
import { UpgrateSkill } from "./UpgrateSkill";
import { HistoryHobbies } from "./HistoryHobbies";

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
            Suite à l&apos;obtention de mon baccalauréat, j&apos;ai commencé mes
            études en mathématique et ai réussi ma première année
            d&apos;université. Cependant, j&apos;ai décidé de retourner à mes
            racines en choisissant de me former en informatique, car c&apos;est
            là ma véritable passion. Tout au long de ce parcours, j&apos;ai eu
            l&apos;opportunité de collaborer avec des amis ainsi que des
            entreprises sur différents projets passionnants, et j&apos;ai fait
            la connaissance de personnes formidables ❤️.
          </Para>
        </div>

        <NgimdockImage />
      </div>

      <UpgrateSkill />

      <HistoryHobbies />
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
