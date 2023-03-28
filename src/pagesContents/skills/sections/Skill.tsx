import clsx from "clsx";
import { useEffect, useState } from "react";
import { RiStarSmileFill } from "react-icons/ri";
import useIsInViewport from "use-is-in-viewport";
import { H2 } from "../../../components";
import TextSphere from "../../../components/textSphere/textSphere";
import TextShpereMobileSkill from "../../../components/textSphere/textSphereMobileSkill";
import TextShpereSkill from "../../../components/textSphere/textSphereSkill";
import {
  TECHNOS_BACKEND,
  TECHNOS_FROTEND,
  TECHNOS_OTHERS,
  TechStackType,
} from "../../../data";
import { Techno } from "../../home/sections/Projects";

export const Skill = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container mt-24 lg:mt-14 flex flex-col   xl:flex-row xl:space-y-0 items-center"
      )}
    >
      <div className="flex flex-col space-y-10">
        <div>
          <div className="flex items-end space-x-1 leading-0">
            <H2 classe=" leading-0" size="sm">
              Backend
            </H2>

            <p className="text-primary text-[11px] -translate-y-1.5 flex items-center space-x-1">
              <RiStarSmileFill className="text-base" />
            </p>
          </div>
          <div className="flex items-center mt-2 space-x-8 xl:space-x-12">
            {TECHNOS_BACKEND.map((techno: TechStackType, index) => (
              <div
                key={index}
                className="flex flex-col justify-center space-y-3"
              >
                <Techno tecnoData={techno} onSelectTechno={() => {}} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <H2 classe=" leading-0" size="sm">
            Frontend
          </H2>
          <div className="flex items-center mt-2 space-x-6 xl:space-x-12">
            {TECHNOS_FROTEND.map((techno: TechStackType, index) => (
              <div
                key={index}
                className="flex flex-col justify-center space-y-3"
              >
                <Techno tecnoData={techno} onSelectTechno={() => {}} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <H2 classe=" leading-0" size="sm">
            Autres
          </H2>
          <div className="flex items-center mt-2 space-x-10 xl:space-x-12 ">
            {TECHNOS_OTHERS.map((techno: TechStackType, index) => (
              <div
                key={index}
                className="flex flex-col justify-center space-y-3"
              >
                <Techno tecnoData={techno} onSelectTechno={() => {}} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center xl:translate-x-28">
        <TextShpereMobileSkill />
        <TextShpereSkill />
      </div>
    </section>
  );
};
