import clsx from "clsx";
import useIsInViewport from "use-is-in-viewport";
import { H2, H3, Para } from "../../../components";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_COACHING } from "../../../lib";

export const Coaching = () => {
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
          backgroundImage: `url('/assets/images/images.jpeg')`,
        }}
        className="w-full h-56 sm:h-auto "
      ></div>

      <div className="sm:py-4">
        <div className="flex flex-col items-center sm:items-start">
          <H3>Formation</H3>
          <H2>Je forme les futurs développeurs de ton entreprise.</H2>
        </div>
        <div className="mt-5">
          <Para>
            Au cours de mon parcours dans la tech j'ai acquis des compétences
            techniques et personnelles qui ne peuvent attendre d'être partagé
            avec les aspirants développeurs de ton entreprise, je les apprends
            le nécessaire,
          </Para>

          <ButtonLink href={ROUTE_COACHING} color="primary" classe="mt-5">
            en savoir plus
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
