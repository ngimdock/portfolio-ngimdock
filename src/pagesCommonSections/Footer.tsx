import clsx from "clsx";
import Link from "next/link";
import { GiBearFace } from "react-icons/gi";
import { FooterRoute, FOOTER_ROUTES } from "../data";
import { SOCIALS_MEDIAS } from "../enums";
import { ROUTE_HOME } from "../lib";

export const Footer = () => {
  const [, , , , ...secondColumn] = FOOTER_ROUTES;

  const { linkedin, twitter, github, freecodecamp } = SOCIALS_MEDIAS;

  const socialMediasFooter = [linkedin, twitter, github];

  return (
    <footer className="pb-10 text-light pt-14 sm:pt-20 mt-28 bg-dark-3">
      <section className="container flex flex-col items-center justify-between space-x-5 space-y-12 text-center sm:flex-row sm:space-y-0">
        <div className="sm:text-left">
          <Link
            href={ROUTE_HOME}
            className="flex items-center flex-col sm:flex-row  space-x-1.5 text-primary justify-center sm:justify-start "
          >
            <GiBearFace size={44} className="hidden sm:block" />
            <GiBearFace size={40} className="sm:hidden" />
          </Link>

          <div className="mt-8 sm:mt-1">
            <span className="text-sm font-extrabold">
              {process.env.NEXT_PUBLIC_MY_NAME?.toUpperCase()}
            </span>
            <p className="text-sm">
              {process.env.NEXT_PUBLIC_MY_JOB?.toUpperCase()}
            </p>
            {/* <p className="mt-1 text-xs opacity-50">
              <span className="uppercase">Whatsapp : </span>{" "}
              <span> + 6 55 95 14 94</span>
            </p> */}
          </div>
        </div>

        <ul className="flex-col hidden space-y-2 text-xs font-Inter sm:flex">
          {FOOTER_ROUTES.slice(0, 4).map((route: FooterRoute, index) => (
            <LinkFooter linkData={route} key={index} />
          ))}
        </ul>

        <ul className="flex-col hidden space-y-5 text-xs md:space-y-2 font-Inter sm:flex">
          {secondColumn.map((route: any, index) => (
            <LinkFooter linkData={route} key={index} />
          ))}
        </ul>

        <ul className="flex flex-col space-y-5 text-xs font-Inter sm:hidden">
          {FOOTER_ROUTES.map((route: any, index) => (
            <LinkFooter linkData={route} key={index} />
          ))}
        </ul>

        <ul className="flex flex-col space-y-5 text-xs sm:space-y-2 font-Inter">
          {socialMediasFooter.map(({ link, name }, index) => (
            <a
              href={link}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="hover:text-light hover:bg-primary py-0.5 px-1.5 animate font-Inter"
            >
              {name}
            </a>
          ))}
        </ul>
      </section>

      <div className="flex flex-col items-center mt-16 text-center">
        <p className="h-[1px] mx-auto bg-dark-2 w-2/3 sm:w-80"></p>
        <p className="inline-block mt-8 text-xs opacity-50 footer-ref font-Inter">
          <span>develop with love by</span>
          {/* <span>develop with ❤️ 🐻 love by </span> */}

          <a
            href={process.env.NEXT_PUBLIC_LINK_LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className=" py-0.5  animate font-Inter lowercase px-2 underline hover-primary hover:text-primary animate "
          >
            {process.env.NEXT_PUBLIC_MY_NAME}
          </a>
        </p>
      </div>
    </footer>
  );
};

type LinkFooterProps = {
  linkData: FooterRoute;
};

function LinkFooter({ linkData }: LinkFooterProps) {
  return (
    <Link
      href={linkData.link}
      className={clsx(
        "hover:text-light hover:bg-primary py-0.5 px-4 animate font-Inter",
        linkData.icon && "flex items-center space-x-3"
      )}
    >
      {linkData.text}
    </Link>
  );
}
