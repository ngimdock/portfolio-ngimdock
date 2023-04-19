import { FORMATION_MODULES } from "../../../data";
import {
  FlexSectionLeft,
  FlexSectionRight,
} from "../../../pagesCommonSections/FlexSection";

export const FormationsModules = () => {
  const pp = <p>contenu</p>;

  function isPair(index: number) {
    return index % 2 === 0;
  }

  return (
    <section className="container flex flex-col space-y-36 separed-sections">
      {FORMATION_MODULES.map((formation, index) => {
        const result = isPair(index) ? (
          <FlexSectionRight data={formation} key={index} />
        ) : (
          <FlexSectionLeft data={formation} key={index} />
        );

        return result;
      })}
    </section>
  );
};
