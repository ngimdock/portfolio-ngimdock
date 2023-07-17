import clsx from "clsx";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";
import useIsInViewport from "use-is-in-viewport";
import { H2, H3, H4, Para } from "../../../components";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { OneServiceType, SERVICES } from "../../../data";
import { ROUTE_SERVICES } from "../../../lib";

export const Services = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  const myServices = SERVICES.map(
    ({ icon, numberProject, title, desciption }: OneServiceType, index) => (
      <Service
        icon={icon}
        numberProject={numberProject}
        title={title}
        desciption={desciption}
        key={index}
      />
    )
  );

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container separed-sections animate md:grid grid-cols-7 xl:gap-x-20 sm:gap-x-6 md:gap-x-8 "
      )}
    >
      <div className="flex flex-col items-center col-span-4 md:items-start">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <H3>services</H3>
          <H2 classe="mt-2">Développement web sur-mesure.</H2>
          <Para classe="mt-3">
            Je pourrais intégrer votre équipe afin d`&apos;`augmenter la
            productivité, Développer une solution complète de votre produit ou
            encore former les futurs développeurs de votre entreprise.
          </Para>
        </div>

        <div className="grid gap-5 mt-10 sm:grid-cols-2 md:hidden">
          {myServices}
          <ButtonLink
            href={ROUTE_SERVICES}
            color="primary"
            classe="md:mt-8 mt-14 hidden sm:block md:hidden "
          >
            plus de détails
          </ButtonLink>
        </div>
        <ButtonLink
          href={ROUTE_SERVICES}
          color="primary"
          classe="md:mt-8 mt-14 sm:hidden md:block "
        >
          plus de détails
        </ButtonLink>
      </div>
      <div className="flex-col hidden col-span-3 space-y-3 md:flex">
        {myServices}
      </div>
    </section>
  );
};

function Service({ icon: Icon, numberProject, title }: OneServiceType) {
  return (
    <Link
      href={ROUTE_SERVICES}
      className=" bg-dark-3 flex items-center justify-between w-full max-w-[400px] px-5 py-4 cursor-pointer group  hover:border-primary/50 animate"
    >
      <div className="flex items-center space-x-6 lg:space-x-10">
        <div className="text-2xl md:text-3xl text-light animate group-hover:text-primary">
          <Icon />
        </div>
        <div className="flex flex-col space-y-3">
          <H4>{title}</H4>
          <p className="text-sm text-light-dark">{numberProject}</p>
        </div>
      </div>
      <RiArrowRightUpLine className="text-2xl lg:-translate-x-2 text-light group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 animate" />
    </Link>
  );
}
