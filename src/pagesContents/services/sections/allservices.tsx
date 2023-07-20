import clsx from "clsx";
import useIsInViewport from "use-is-in-viewport";
import { H2, Para } from "../../../components";
import { OneServiceType, SERVICES } from "../../../data";
import Link from "next/link";

export const AllServices = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container separed-sections"
      )}
    >
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} serviceData={service} />
        ))}
      </div>
    </section>
  );
};

type ServiceCardProps = {
  serviceData: OneServiceType;
};

export const ServiceCard = ({ serviceData }: ServiceCardProps) => {
  const { desciption, title } = serviceData;
  return (
    <article className=" bg-dark-3 p-8 pt-20 hover:-translate-y-4 animate">
      <div>
        <span className="inline-block h-0.5 bg-light w-[70%]"></span>
        <H2 size="sm" classe="mt-5">
          {title}
        </H2>
      </div>

      <Para classe="mt-10" size="sm">
        {desciption}
      </Para>

      {serviceData.link && (
        <div className="flex justify-center mt-3 ">
          <Link
            href={serviceData.link}
            className="text-xs font-Inter text-primary hover:opacity-50 animate underline"
          >
            En savoir plus
          </Link>
        </div>
      )}
    </article>
  );
};
