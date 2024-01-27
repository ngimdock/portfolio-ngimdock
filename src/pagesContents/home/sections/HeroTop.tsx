import clsx from "clsx";

import Image from "next/image";
import ngimdock_photo from "../../../../public/assets/images/profile-dan.png";
import Link from "next/link";
import { ScrollDown } from "../../../components";
import { HEROTOP_STACK, TechStackType } from "../../../data";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { ROUTE_CONTACT, ROUTE_PROJECTS } from "../../../lib";
import useIsInViewport from "use-is-in-viewport";

export const HeroTop = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <header
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container text-light h-screen md:h-auto pt-20"
        // "container text-light h-screen max-h-[730px]  md:max-h-[830px]"
      )}
    >
      {/* <Navbar /> */}

      <div className="relative mt-24 sm:mt-32 md:mt-36">
        <div className="items-center lg:flex lg:space-x-64">
          <section className="relative z-10 text-center sm:text-left">
            <h1 className="text-light header-h1 font-Inter">
              <span className="block header-name">Ngimdock Zemfack</span>
              <span className="header-job">Software Engineer.</span>
            </h1>
            <p className="mt-3 sm:text-lg text-light header-p">
              Je développe des applications web sur-mesure et j&apos;adore faire
              ça.
            </p>

            <div className="flex items-center justify-center mt-4 space-x-2.5 sm:justify-start">
              {HEROTOP_STACK.map((techno: TechStackType, index) => (
                <Tecno Techno={techno} key={index} />
              ))}
            </div>

            <div className="flex items-center justify-center mt-8 space-x-1 sm:space-x-5 sm:justify-start">
              <ButtonLink href={ROUTE_CONTACT} color="primary">
                me contacter
              </ButtonLink>
              <ButtonLink
                href={ROUTE_PROJECTS}
                color="dark-2"
                classe="hidden sm:block"
              >
                mes réalisations
              </ButtonLink>
            </div>
          </section>
          <section className="hidden border rounded-full lg:opacity-100 lg:block animate border-light-dark">
            <Image
              width={270}
              height={270}
              alt={
                process.env.NEXT_PUBLIC_MY_NAME
                  ? process.env.NEXT_PUBLIC_MY_NAME
                  : "ngimdock zemfack"
              }
              src={ngimdock_photo}
            />
          </section>
        </div>

        <div className="flex justify-center mt-20 md:mt-16 sm:justify-end lg:justify-center sm:pr-32 lg:pr-0 lg:mt-28">
          <ScrollDown />
        </div>
      </div>
    </header>
  );
};

type TecnoProps = {
  Techno: TechStackType;
};

function Tecno({ Techno }: TecnoProps) {
  const { alt, link, src, tecnoName, setOpacity, sizeIcon } = Techno;
  return (
    <Link href={link} target="_blank">
      <div className="flex items-center space-x-2 cursor-pointer md:space-x-1 group">
        <Image
          width={sizeIcon ? sizeIcon : 40}
          alt={alt}
          src={src}
          className={clsx(
            "animate",
            setOpacity
              ? "opacity-60 group-hover:opacity-100"
              : "opacity-90 group-hover:opacity-100"
          )}
        />
        <p className="hidden text-xs font-medium uppercase sm:block text-light letter-shrink">
          {tecnoName}
        </p>
      </div>
    </Link>
  );
}
