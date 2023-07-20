import type { AppProps } from "next/app";
import { MobileContextProvider } from "../src/dataManager/provider/MobileContextProvider";
import { NavbarMobile } from "../src/pagesCommonSections/NavbarMobile";

import "../styles/globals.css";
import "../styles/scroll-down.css";
import "../styles/simple-scroll-down.css";
import "../styles/splash-screen.css";
import "../styles/splash-screen.css";
import "../styles/textSphere.css";
import "../styles/carousel.css";

import { register } from "swiper/element/bundle";
import { ToastProvider } from "../src/dataManager/provider/ToastProvider";

import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../src/pagesCommonSections";
import clsx from "clsx";
import { useScrollWindow } from "../src/hooks";
import { POSITION_Y } from "../src/lib";
import { ProjectContextProvider } from "../src/dataManager/provider/ProjectContextProvider";

register();

export default function App({ Component, pageProps }: AppProps) {
  const [positionY] = useScrollWindow();

  return (
    <MobileContextProvider>
      <ProjectContextProvider>
        <ToastProvider />
        <NavbarMobile />

        <div className={clsx("flex justify-center")}>
          <div className={clsx(clsx("container fixed top-0 z-40 mx-auto p-4"))}>
            <Navbar />
          </div>

          {positionY > POSITION_Y && (
            <div className="fixed top-0 z-30 w-full py-2 h-16 mx-auto shadow-sm  bg-dark-3/95"></div>
          )}
        </div>
        <Component {...pageProps} />
      </ProjectContextProvider>
    </MobileContextProvider>
  );
}
