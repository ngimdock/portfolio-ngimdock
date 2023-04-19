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

register();

export default function App({ Component, pageProps }: AppProps) {
  const [positionY] = useScrollWindow();

  return (
    <MobileContextProvider>
      <ToastProvider />
      <NavbarMobile />

      <div className={clsx("flex justify-center")}>
        <div className={clsx("container fixed top-0 z-40 mx-auto ")}>
          <Navbar />
        </div>

        {positionY > 120 && (
          <div className="fixed top-0 z-30 w-full h-20 py-4 mx-auto shadow-sm bg-dark/70 shadow-light/10"></div>
        )}
      </div>
      <Component {...pageProps} />
    </MobileContextProvider>
  );
}
