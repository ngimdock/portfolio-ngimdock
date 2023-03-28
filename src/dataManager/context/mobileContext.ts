import { createContext } from "react";

export const mobileNavContext = createContext({
  isMobileOpen: false,
  openMobileNav: () => {},
  closeMobileNav: () => {},
});
