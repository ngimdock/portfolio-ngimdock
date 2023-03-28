import { useEffect, useState } from "react";

/**
 * This is a custom hook that calculate the curren size of
 * the window and return it
 */
export const useResizeWindow = () => {
  // state variable
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", calculateSize);

    return () => {
      window.removeEventListener("resize", calculateSize);
    };
  }, [size]);

  const calculateSize = () => {
    setSize(window.innerWidth);
  };

  return [size];
};
