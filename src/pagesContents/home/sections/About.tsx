import { H2, H3, Para } from "../../../components";
import useIsInViewport from "use-is-in-viewport";
import clsx from "clsx";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_ABOUT } from "../../../lib";
import { TextSphere } from "../../../components/textSphere/textSphere";
import { UnderlineLink } from "../../../components/link/UnderlineLink";

export const About = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container mt-20 lg:mt-8 flex flex-col lg:flex-row items-center"
      )}
    >
      <div className="max-w-2xl text-center lg:text-left">
        <div>
          <div className="flex justify-center lg:justify-start">
            <H3>À propos</H3>
          </div>
          <H2 classe="mt-3">Software Engineer.</H2>
        </div>
        <p className="mt-3 sm:text-md text-light-dark">
          Je suis disponible pour tout type d&apos;opportunités en CDI ou
          freelance. Mes compétences en{" "}
          <UnderlineLink
            link="https://www.agilepartner.net/en/le-software-craftsman-super-developpeur/"
            text="software craftsmanship"
            targerBlack={true}
          />{" "}
          me permettent de m&apos;adapter rapidement à d&apos;autres librairies
          ou frameworks. J&apos;apprécie discuter avec d&apos;autres
          développeurs sur des sujets qui me permettent de découvrir de nouveaux
          concepts à apprendre. Transférer mes compétences aux profils plus
          juniors est aussi un grand plaisir.
        </p>
        <div className="items-center hidden mt-6 space-x-3 lg:flex">
          <ButtonLink
            href={process.env.NEXT_PUBLIC_MY_CV as string}
            targetBlack={true}
            color="primary"
            classe="inline"
          >
            📜 mon cv
          </ButtonLink>
          <ButtonLink href={ROUTE_ABOUT} color="dark-2" classe="inline">
            En savoir plus
          </ButtonLink>
        </div>
      </div>
      <TextSphere />
    </section>
  );
};
