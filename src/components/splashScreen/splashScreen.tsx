import { GiBearFace } from "react-icons/gi";

export const SplashScreen = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-dark text-white">
      <div className="relative h-full w-full">
        <div className="absolute top-1/2 left-1/2 transform text-primary -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="spashScreenOpacity">
            <GiBearFace size={55} className="hidden sm:block " />
            <GiBearFace size={40} className="sm:hidden" />
          </div>
          {/* <span className="text-xs font-Inte inline-block mt-1">Bear</span> */}
        </div>
      </div>
    </div>
  );
};
