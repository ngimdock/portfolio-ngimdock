import { useState } from "react";
import { mobileNavContext as MobileNavContext } from "../context";

export const MobileContextProvider = ({ children }: { children: any }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function openMobileNav() {
    setIsMobileOpen((pevValue) => !pevValue);
  }
  function closeMobileNav() {
    setIsMobileOpen((pevValue) => !pevValue);
  }

  const contextValue = {
    isMobileOpen,
    openMobileNav,
    closeMobileNav,
  };

  return (
    <MobileNavContext.Provider value={contextValue}>
      {children}
    </MobileNavContext.Provider>
  );
};
