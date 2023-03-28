import Link from "next/link";
import {
  ABOUT,
  CONTACT,
  PROJECTS,
  RESUME,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PROJECTS,
  ROUTE_SERVICES,
  ROUTE_SKILLS,
  SERVICES,
  SKILLS,
} from "../lib";
import { RiHeadphoneFill, RiMenuFill } from "react-icons/ri";
import { GiBearFace } from "react-icons/gi";
import { useContext } from "react";
import { mobileNavContext } from "../dataManager/context";
export const Navbar = () => {
  const { openMobileNav } = useContext(mobileNavContext);

  type NavRouteType = {
    id: number;
    route: string;
    link: string;
  };

  const NAV_DATAS: NavRouteType[] = [
    {
      id: 2,
      route: SERVICES,
      link: ROUTE_SERVICES,
    },
    {
      id: 3,
      route: PROJECTS,
      link: ROUTE_PROJECTS,
    },
    {
      id: 4,
      route: SKILLS,
      link: ROUTE_SKILLS,
    },
    {
      id: 5,
      route: ABOUT,
      link: ROUTE_ABOUT,
    },
    {
      id: 6,
      route: RESUME,
      link: ROUTE_HOME,
    },
    {
      id: 7,
      route: CONTACT,
      link: ROUTE_CONTACT,
    },
  ];

  return (
    <nav className="flex items-center justify-between w-full pt-10">
      <Link
        href={ROUTE_HOME}
        className="flex items-center space-x-1.5 text-primary"
      >
        <GiBearFace size={44} className="hidden sm:block" />
        <GiBearFace size={46} className="sm:hidden" />
        <span className="hidden font-bold sm:block">Bear</span>
      </Link>
      <ul className="items-center hidden space-x-4 text-xs font-medium md:flex lg:space-x-6 text-light">
        {NAV_DATAS.map(({ id, link, route }: NavRouteType) => (
          <Link
            key={id}
            href={link}
            className="hover:text-light hover:bg-primary py-0.5 px-1.5 animate font-Inter"
          >
            {route}
          </Link>
        ))}

        <li>
          <RiHeadphoneFill className="text-2xl text-primary -translate-y-0.5 cursor-pointer hover:opacity-60 animate" />
        </li>
      </ul>

      <div
        onClick={() => openMobileNav()}
        className="p-3 text-xl rounded-full cursor-pointer md:hidden bg-dark-3 text-light hover:text-white animate"
      >
        <RiMenuFill className="text-2xl" />
      </div>
    </nav>
  );
};
