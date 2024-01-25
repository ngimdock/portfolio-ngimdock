import { H2, Para } from "../../../components";

import clsx from "clsx";
import { SOCIALS_MEDIAS } from "../../../enums";
import { UnderlineLink } from "../../../components/link/UnderlineLink";

export const UpgrateSkill = () => {
  return (
    <section
      className={clsx(
        "container mt-24 sm:mt-8 m grid-cols-2 space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-20 sm:text-left"
      )}
    >
      <div
        style={{
          backgroundImage: `url('/assets/images/monte-competences3.jpg')`,
        }}
        className="object-none w-full bg-center bg-no-repeat bg-cover grayscale h-72 md:h-auto sm:h-auto rounded-2xl"
      ></div>
      <div className="md:py-12">
        <H2>Monté en compétences.</H2>
        <p className="mt-3 sm:text-md text-light-dark">
          Je me tiens à jour de l&apos;évolution technologique en suivant des
          formations sur des plateformes comme Freecodecamp, et Udemy qui me
          délivrent des{" "}
          <UnderlineLink
            link="https://www.freecodecamp.org/certification/dan73/javascript-algorithms-and-data-structures"
            text="certifications"
            targerBlack={true}
          />
          . J&apos;aime bien aussi contribuer à des projets{" "}
          <UnderlineLink
            link="https://gx.dilane3.com/about/team"
            text="open source"
            targerBlack={true}
          />{" "}
          , développer des{" "}
          <UnderlineLink
            link="https://www.npmjs.com/package/nestjs-google-drive"
            text="packets npm"
            targerBlack={true}
          />{" "}
          et participer à des concours de programmation organisés par{" "}
          <UnderlineLink
            link="https://i.ibb.co/3mnm2cY/google.png"
            text="google"
            targerBlack={true}
          />{" "}
          ou github. Pendant mes heures libres, j&apos;écris des{" "}
          <UnderlineLink
            link="https://medium.com/@ngimdockzemfack"
            text=" articles de blog"
            targerBlack={true}
          />{" "}
          sur des sujets en rapport avec le développement web et partager mes
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
