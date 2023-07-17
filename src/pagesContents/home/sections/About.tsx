import { H2, H3, Para } from "../../../components";
import useIsInViewport from "use-is-in-viewport";
import clsx from "clsx";
import TextSphere from "../../../components/textSphere/textSphere";
import TextShpereMobile from "../../../components/textSphere/textSphereMobile";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_ABOUT } from "../../../lib";

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
          <H2 classe="mt-3">Développeur fullstack typescript</H2>
        </div>
        <Para>
          Bien que je sois un développeur pouvant aussi bien intervenir sur le
          back comme le front, mon plus grand centre d&apos;intérêt et ma
          spécialité est le backend. J&apos;aime bien travailler dans une équipe
          qui contient des développeurs plus expérimentés car je pourrais
          apprendres des nouveaux concepts et les maîtriser rapidement.
          Transférer mes compétences aux profils plus juniors est aussi un grand
          plaisir.
        </Para>
        <div className="items-center hidden mt-6 space-x-3 lg:flex">
          <ButtonLink href={ROUTE_ABOUT} color="primary" classe="inline">
            En savoir plus
          </ButtonLink>
        </div>
      </div>

      <TextSphere />
      <TextShpereMobile />
    </section>
  );
};
