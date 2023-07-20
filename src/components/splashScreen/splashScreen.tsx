import { GiBearFace } from "react-icons/gi";
import { PyramidLoader } from "../loaders/pyramidLoader";

export const SplashScreen = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-dark text-white ">
      <div className="flex justify-center items-center h-full">
        <PyramidLoader />
      </div>
    </div>
  );
};
