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
        "container mt-24 sm:mt-8 m grid-cols-2 flex   flex-col-reverse space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-16 sm:text-left"
      )}
    >
      <div className="md:py-12 mt-6 md:mt-0">
        <H2>Histoires & hobbies</H2>
        <p className="mt-3 sm:text-md text-light-dark">
          Quand j'étais plus jeune, je voulais devenir acteur de ciné et tourner
          avec des grands noms comme{" "}
          <UnderlineLink
            link="https://i.ibb.co/NVmgx3q/will-smith.jpg"
            text="Will Smith"
            targerBlack={true}
          />{" "}
          (le même rêve que{" "}
          <UnderlineLink
            link="https://i.ibb.co/NNXVWhr/khaby.jpg"
            text="Kabby Lame"
            targerBlack={true}
          />{" "}
          😅 ). Aujourd'hui, je me vois bien devenir{" "}
          <UnderlineLink
            link="https://i.ibb.co/b5ZJ63j/Capture-d-cran-du-2023-07-14-09-26-13.png"
            text="Backend Tech Lead"
            targerBlack={true}
          />{" "}
          dans le futur. En 2018 après le BAC, sous l'influence de la{" "}
          <UnderlineLink
            // link="https://i.ibb.co/b7Yp69s/photo-1368776392.jpg"
            link="https://i.ibb.co/h8S8Qhj/sexion-dassaut-le-cole-des-points-vitaux.jpg"
            text="Sexion d'assaut"
            targerBlack={true}
          />{" "}
          , des amis et moi avons créé notre groupe de musique et commencé à
          écrire des textes qui n'ont malheureusement pas fonctionné.J'aime la{" "}
          <UnderlineLink
            // link="https://i.ibb.co/b7Yp69s/photo-1368776392.jpg"
            link="https://www.youtube.com/watch?v=GS-666L0VLE"
            text="musique américaine"
            targerBlack={true}
          />{" "}
          et regarder le foot quand{" "}
          <UnderlineLink
            // link="https://i.ibb.co/b7Yp69s/photo-1368776392.jpg"
            link="https://i.ibb.co/D1Ys3Bf/leonnel-messi.jpg"
            text="Leonel messi"
            targerBlack={true}
          />{" "}
          ou le{" "}
          <UnderlineLink
            // link="https://i.ibb.co/b7Yp69s/photo-1368776392.jpg"
            link="https://www.youtube.com/watch?v=KNnIF9T5qa4"
            text="Cameroun🇨🇲"
            targerBlack={true}
          />{" "}
          jouent. Passer du temps en famille est ce qui me rend le plus heureux.
          Tous légers entre Les mains du Très Haut et ne jamais baisser les bras
          🙏🏿
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url('/assets/images/me-assis.jpg')`,
        }}
        className="object-none grayscale w-full h-72 md:h-auto  bg-center bg-no-repeat bg-cover sm:h-auto rounded-2xl"
      ></div>
    </section>
  );
};
