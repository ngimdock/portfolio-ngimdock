import { H2 } from "../../../components";

import useIsInViewport from "use-is-in-viewport";
import clsx from "clsx";
import { UnderlineLink } from "../../../components/link/UnderlineLink";

export const HistoryHobbies = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container mt-24 sm:mt-8 m grid-cols-2 flex   flex-col-reverse space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-20 sm:text-left"
      )}
    >
      <div className="md:py-12 mt-6 md:mt-0">
        <H2>Histoires & hobiies</H2>
        <p className="mt-3 sm:text-md text-light-dark">
          Quand j'étais plus jeune, je voulais devenir acteur de ciné et tourner
          avec des grands noms comme{" "}
          <UnderlineLink
            link="https://i.ibb.co/NVmgx3q/will-smith.jpg"
            text="Will Smith"
            targerBlack={true}
          />{" "}
          (Le même rêve que{" "}
          <UnderlineLink
            link="https://i.ibb.co/NNXVWhr/khaby.jpg"
            text="Kabby Lame"
            targerBlack={true}
          />{" "}
          😅 ). À l'adolescence, sous l'influence de la{" "}
          <UnderlineLink
            // link="https://i.ibb.co/b7Yp69s/photo-1368776392.jpg"
            link="https://i.ibb.co/h8S8Qhj/sexion-dassaut-le-cole-des-points-vitaux.jpg"
            text="Sexion d'assaut"
            targerBlack={true}
          />{" "}
          , des amis et moi avions créé notre groupe de musiciens et commencé à
          écrire des textes mais le projet n'a pas fonctionné. J'aime voyager
          découvrir des nouveaux endroits avec des civilisations différentes,
          passer du temps en famille est ce qui me rend le plus heureux. Tous
          légers entre Les mains du Très Haut et ne jamais baisser les bras 🙏🏿
        </p>
      </div>

      <div
        style={{
          backgroundImage: `url('/assets/images/histoires-hobbies.jpeg')`,
        }}
        className="object-none w-full h-72 md:h-auto  bg-center bg-no-repeat bg-cover sm:h-auto rounded-2xl"
      ></div>
    </section>
  );
};
