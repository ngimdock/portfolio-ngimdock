import Link from "next/link";
import {
  ABOUT,
  CONTACT,
  FORMATIONS,
  POSITION_Y,
  PROJECTS,
  RESUME,
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_FORMATIONS,
  ROUTE_HOME,
  ROUTE_PROJECTS,
  ROUTE_SERVICES,
  ROUTE_SKILLS,
  SERVICES,
  SKILLS,
} from "../lib";
import { RiMenuFill } from "react-icons/ri";
import { GiBearFace } from "react-icons/gi";
import { useContext } from "react";
import { mobileNavContext } from "../dataManager/context";
import clsx from "clsx";
import { useScrollWindow } from "../hooks";

type NavRouteType = {
  id: number;
  route: string;
  link: string;
};

export const NAV_DATAS: NavRouteType[] = [
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
    id: 6,
    route: FORMATIONS,
    link: ROUTE_FORMATIONS,
  },
  {
    id: 5,
    route: ABOUT,
    link: ROUTE_ABOUT,
  },

  {
    id: 7,
    route: CONTACT,
    link: ROUTE_CONTACT,
  },
];

const navLinkClassname =
  "hover:text-light hover:bg-primary py-0.5 px-1 animate font-Inter";

export const Navbar = () => {
  const { openMobileNav } = useContext(mobileNavContext);

  const [positionY] = useScrollWindow();

  return (
    <nav
      className={clsx(
        "relative z-50 flex items-center justify-between w-full "
        // positionY > POSITION_Y && " pt-4"
      )}
    >
      <Link
        href={ROUTE_HOME}
        className="flex items-center space-x-1.5 text-primary"
      >
        <GiBearFace size={44} className="hidden sm:block" />
        <GiBearFace size={40} className="sm:hidden" />
        <span className="hidden font-bold sm:block">Bear</span>
      </Link>
      <ul className="items-center hidden space-x-4 text-xs font-medium md:flex lg:space-x-5 text-light">
        {NAV_DATAS.map(({ id, link, route }: NavRouteType) => (
          <Link key={id} href={link} className={navLinkClassname}>
            {route}
          </Link>
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
        onClick={() => openMobileNav()}
        className="p-3 text-xl rounded-full cursor-pointer md:hidden bg-dark-3 text-light hover:text-white animate"
      >
        <RiMenuFill className="text-2xl" />
      </div>
    </nav>
  );
};
