import { H2 } from "../../../components";

import clsx from "clsx";
import { UnderlineLink } from "../../../components/link/UnderlineLink";

export const HistoryHobbies = () => {
  return (
    <section
      className={clsx(
        "container mt-24 sm:mt-8 m grid-cols-2 flex   flex-col-reverse space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-16 sm:text-left"
      )}
    >
      <div className="mt-6  md:mt-0 md:py-20">
        <H2>Histoires & hobbies</H2>
        <p className="mt-3 sm:text-md text-light-dark">
          Quand j&apos;étais plus jeune, je voulais devenir acteur de cinéma et
          tourner avec des grands noms comme{" "}
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
          😅 ). Après le BAC, des amis et moi avons créé notre groupe de musique
          et commencé à écrire des textes qui n&apos;ont malheureusement pas
          fonctionné.J&apos;aime la{" "}
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
            text="Lionel Messi"
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
        className="object-none w-full bg-center bg-no-repeat bg-cover grayscale h-72 md:h-auto sm:h-auto rounded-2xl"
      ></div>
    </section>
  );
};
