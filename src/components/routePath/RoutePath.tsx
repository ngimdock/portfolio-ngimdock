import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

export type RoutePathType = {
  id: number;
  link: string;
  text: string;
  icon: any;
};

type RoutePathProp = {
  allRoutes: RoutePathType[];
};

export const RoutePath = ({ allRoutes }: RoutePathProp) => {
  return (
    <section className="flex items-center justify-center space-x-4 sm:justify-start">
      {allRoutes.map(
        ({ icon, id, link, text }: RoutePathType, currentItemIndex: number) => (
          <div
            key={id}
            className="flex items-center space-x-1 sm:space-x-3 text-primary hover:text-primary-dark animate"
          >
            <Link
              href={link}
              className="flex items-center sm:space-x-2 space-x-1.5"
            >
              <div className="text-xl">{icon}</div>
              <span className="text-xs sm:text-sm">{text}</span>
            </Link>

            {currentItemIndex < allRoutes.length - 1 && (
              <MdNavigateNext className="block" />
            )}
          </div>
        )
      )}
    </section>
  );
};
