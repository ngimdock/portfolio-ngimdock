import Image from "next/image";
import Link from "next/link";
import {
  ROUTE_SERVICES,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_PROJECTS,
  ROUTE_SKILLS,
  ROUTE_HOME,
  RESUME,
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
import { NAV_DATAS } from "./Navbar";

type NavRouteType = {
  id: number;
  route: string;
  link: string;
};

const navLinkClassname = "hover:text-primary hover:cursor-pointer animate ";

export const NavbarMobile = () => {
  const { isMobileOpen, closeMobileNav } = useContext(mobileNavContext);

  const MOBILE_NAV_DATAS: NavRouteType[] = [
    {
      id: 1,
      route: "home",
      link: ROUTE_HOME,
    },
    {
      id: 2,
      route: "services",
      link: ROUTE_SERVICES,
    },
    {
      id: 3,
      route: "projects",
      link: ROUTE_PROJECTS,
    },
    {
      id: 4,
      route: "skills",
      link: ROUTE_SKILLS,
    },
    {
      id: 5,
      route: "about",
      link: ROUTE_ABOUT,
    },
    {
      id: 6,
      route: "remume | cv",
      link: ROUTE_HOME,
    },
    {
      id: 7,
      route: "contact",
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
        {NAV_DATAS.map(({ id, route, link }: NavRouteType) => (
          <div key={id} onClick={() => closeMobileNav()}>
            <Link href={link} className={navLinkClassname}>
              {route}
            </Link>
          </div>
        ))}
        {/* <Link
          href={process.env.NEXT_PUBLIC_MY_CV as string}
          target="_blank"
          className={navLinkClassname}
        >
          {RESUME}
        </Link> */}
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
