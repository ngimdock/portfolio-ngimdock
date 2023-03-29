import clsx from "clsx";
import useIsInViewport from "use-is-in-viewport";
import { H2, Para } from "../../../components";
import ngimdock_photo from "../../../../public/assets/images/profile-pic2.png";
import Image from "next/image";

export const About = () => {
  const [isInViewport, targetRef] = useIsInViewport();

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

      <div className="grid-cols-2 space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-20 sm:text-left">
        <div
          style={{
            backgroundImage: `url('/assets/images/images.jpeg')`,
          }}
          className="w-full h-56 sm:h-auto "
        ></div>

        <div className="sm:py-20">
          <H2>Monté en compétence.</H2>
          <Para>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos natus necessitatibus sequi eveniet saepe fugit? Eius
            reprehenderit eveniet ea neque saepe delectus quaerat, optio ex in
            cumque quasi ut iste!
          </Para>
        </div>
      </div>

      <div className="flex flex-col-reverse grid-cols-2 space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-20 sm:text-left">
        <div className="mt-8 sm:py-20 sm:mt-0">
          <H2>Histoire et hobbies.</H2>
          <Para>
            Si j'était un animal sauvage, je serait sûrement un ours, l'ours de
            winterfel. Quand j'était encore gamin, mon rêve était de dévenir
            acteur de ciné car j'était très fan de will smitch et me voyais
            tourner dans un films avec lui (oui j'avais le même rêve que khabby
            lamé). Je pratique aussi beaucoup la muscu pour maintenir la forme
            et regarde le foot. Aujourd'hui l'un de mes plus grand plaîsir des
            voir mes clients satisfaient après ma prestation. Et si on demarait
            avec votre projet ?
          </Para>
        </div>

        <div
          style={{
            backgroundImage: `url('/assets/images/images.jpeg')`,
          }}
          className="w-full h-56 sm:h-auto "
        ></div>
      </div>
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
