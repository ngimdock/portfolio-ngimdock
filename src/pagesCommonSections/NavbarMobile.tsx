import Image from "next/image";
import Link from "next/link";
import {
  ROUTE_SERVICES,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_PROJECTS,
  ROUTE_SKILLS,
  ROUTE_HOME,
} from "../lib";

import headphone from "../../public/assets/svg/headphone.svg";
import Logo from "../../public/logo.svg";
import { Button } from "../components";
import { useContext, useEffect } from "react";
import { mobileNavContext } from "../dataManager/context";
import clsx from "clsx";
import {
  RiCloseCircleFill,
  RiCloseFill,
  RiHeadphoneFill,
} from "react-icons/ri";

type NavRouteType = {
  id: number;
  route: string;
  link: string;
};

export const NavbarMobile = () => {
  const { isMobileOpen, closeMobileNav } = useContext(mobileNavContext);

  const MOBILE_NAV_DATAS: NavRouteType[] = [
    {
      id: 1,
      route: "accueil",
      link: ROUTE_HOME,
    },
    {
      id: 2,
      route: "services",
      link: ROUTE_SERVICES,
    },
    {
      id: 3,
      route: "projets",
      link: ROUTE_PROJECTS,
    },
    {
      id: 4,
      route: "compétences",
      link: ROUTE_SKILLS,
    },
    {
      id: 5,
      route: " à propos",
      link: ROUTE_ABOUT,
    },
    {
      id: 6,
      route: "remumé | cv",
      link: ROUTE_HOME,
    },
    {
      id: 7,
      route: " contact",
      link: ROUTE_CONTACT,
    },
  ];

  return (
    <nav
      className={clsx(
        isMobileOpen
          ? "fixed top-0 left-0 z-50 flex justify-center w-full h-screen py-20 text-light bg-dark"
          : "hidden"
      )}
    >
      <ul className="flex flex-col items-center space-y-8 text-sm font-bold text-center uppercase item-center">
        {MOBILE_NAV_DATAS.map(({ id, route, link }: NavRouteType) => (
          <div key={id} onClick={() => closeMobileNav()}>
            <Link
              href={link}
              className="hover:text-primary hover:cursor-pointer animate "
            >
              {route}
            </Link>
          </div>
        ))}

        <li className="px-10 py-2 rounded-full shadow-sm cursor-pointer animate shadow-primary hover:-translate-y-2 hover:shadow-light">
          <RiHeadphoneFill className="text-xl text-primary  -translate-y-0.5 cursor-pointer hover:opacity-60 animate" />
        </li>
      </ul>

      <div
        onClick={() => closeMobileNav()}
        className="absolute p-2 text-xl rounded-full cursor-pointer bg-dark-2 top-8 right-6 md:top-18 md:right-20 hover:bg-primary animate text-light"
      >
        <RiCloseFill />
      </div>
    </nav>
  );
};
