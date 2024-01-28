import { H2, H3, Para } from "../../../components";
import clsx from "clsx";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { TextSphere } from "../../../components/textSphere/textSphere";
import { ROUTE_CONTACT } from "../../../lib";

export const About = () => {
  return (
    <section
      className={clsx(
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
          Je crée des projets web, qu&apos;ils soient de petite ou grande
          envergure, allant des sites vitrines aux applications, ainsi que la
          mise en place des SaaS. Si vous recherchez un développeur Frontend,
          Backend, ou Fullstack, n&apos;hésitez pas à me contacter.
        </p>
        <div className="items-center hidden mt-6 space-x-3 lg:flex">
          <ButtonLink href={ROUTE_CONTACT} color="primary">
            me contacter
          </ButtonLink>
          <ButtonLink
            href={process.env.NEXT_PUBLIC_MY_CV as string}
            targetBlack={true}
            color="dark"
            classe="inline"
          >
            Télécharger mon CV
          </ButtonLink>
        </div>
      </div>
      <TextSphere />
    </section>
  );
};
