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
            <H3>A propos</H3>
          </div>
          <H2 classe="mt-3">Développeur fullstack typescript</H2>
        </div>
        <Para>
          Je suis un développeur fullstack avec une grande sensibilité pour un
          code qui se veux clean, lisible, refactorisé et bien architechturé.
        </Para>
        <Para>
          Avec les technologies qui avances à grand pas, je fait de mon mieux
          pour rester à jour afin de toujours délivrer un travail de qualité.
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
