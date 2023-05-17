import { useState, useEffect } from "react";

export function useScrollWindow() {
  const [scrollPositionY, setScrollPositionY] = useState(0);

  //useEffect section
  useEffect(() => {
    window.addEventListener("scroll", calculateScrollValue);

    return () => window.removeEventListener("scroll", calculateScrollValue);
  }, [scrollPositionY]);

  function calculateScrollValue() {
    setScrollPositionY(window.scrollY);
  }

  return [scrollPositionY];
}
