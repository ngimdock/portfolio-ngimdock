import { H2, Para } from "../../../components";

import useIsInViewport from "use-is-in-viewport";
import clsx from "clsx";
import { SOCIALS_MEDIAS } from "../../../enums";
import { UnderlineLink } from "../../../components/link/UnderlineLink";

export const UpgrateSkill = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container mt-24 sm:mt-8 m grid-cols-2 space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-20 sm:text-left"
      )}
    >
      <div
        style={{
          backgroundImage: `url('/assets/images/monte-competences.jpg')`,
        }}
        className="object-none h-72 md:h-auto w-full bg-center bg-no-repeat bg-cover sm:h-auto rounded-2xl"
      ></div>
      <div className="md:py-12">
        <H2>Monté en compétences.</H2>
        <p className="mt-3 sm:text-md text-light-dark">
          Je me tiens à jour de l'évolution des technologiques en suivant des
          formations sur des plateformes comme freecodecamp, et udemy qui me
          délivrent des{" "}
          <UnderlineLink
            link="https://www.freecodecamp.org/certification/dan73/javascript-algorithms-and-data-structures"
            text="certifications"
            targerBlack={true}
          />
          . J'aime bien aussi contribuer à des projets{" "}
          <UnderlineLink
            link="https://gx.dilane3.com/about/team"
            text="open source"
            targerBlack={true}
          />{" "}
          ou participer à des concours de programmation organisés par{" "}
          <UnderlineLink
            link="https://i.ibb.co/3mnm2cY/google.png"
            text="google"
            targerBlack={true}
          />{" "}
          ou github. Pendant mes heures libres, j'écris des{" "}
          <UnderlineLink
            link="https://medium.com/@ngimdockzemfack"
            text=" articles de blog"
            targerBlack={true}
          />{" "}
          sur des sujets en rapport avec le développement web et partage mes
          expériences sur{" "}
          <UnderlineLink
            link={SOCIALS_MEDIAS.linkedin.link}
            text={SOCIALS_MEDIAS.linkedin.name}
            targerBlack={true}
          />{" "}
          ou{" "}
          <UnderlineLink
            link={SOCIALS_MEDIAS.twitter.link}
            text={SOCIALS_MEDIAS.twitter.name}
            targerBlack={true}
          />
          .{" "}
        </p>
      </div>
    </section>
  );
};
