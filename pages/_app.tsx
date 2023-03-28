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

register();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MobileContextProvider>
      <ToastProvider />
      <NavbarMobile />

      <Component {...pageProps} />
    </MobileContextProvider>
  );
}
