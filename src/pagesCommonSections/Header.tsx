import { H2, RoutePathType } from "../components";
import { Navbar } from "./Navbar";
import { RoutePath } from "../components";
import useIsInViewport from "use-is-in-viewport";
import clsx from "clsx";

type HeaderType = {
  title: string;
  description?: string;
  buttonCTA: any;
  routesPath: RoutePathType[];
};

export const Header = ({
  title,
  buttonCTA,
  description,
  routesPath,
}: HeaderType) => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <header
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container text-light"
      )}
    >
      <Navbar />

      <section className="items-end grid-cols-8 mt-24 text-center sm:mt-28 sm:grid sm:text-left">
        <div className="col-span-6">
          <RoutePath allRoutes={routesPath} />
          <H2 classe="mt-3">{title}</H2>
          <p className="mt-4 max-w-[400px] mx-auto sm:mx-0">{description}</p>
        </div>
        <div className="flex justify-center col-span-2 mt-12 sm:mt-0">
          {buttonCTA}
        </div>
      </section>
    </header>
  );
};
