import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { circleSizes, texts } from "./config";
import { useEffect, useState } from "react";

export const TextSphere = () => {
  const [sizeCircle, setSizeCicle] = useState(320);

  useEffect(() => {
    if (window.innerWidth < 765) {
      setSizeCicle(circleSizes.mobile);
      return;
    }

    setSizeCicle(circleSizes.desktop);
  });

  return (
    <section className="py-8 sm:py-0">
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: sizeCircle,
          useContainerInlineStyles: true,
          useItemInlineStyles: true,
          maxSpeed: "normal",
          containerClass: "tag-cloud__container",
          itemClass: "tag-cloud__item",
        })}
        // onClick={(tag: string, ev: MouseEvent) => alert(tag)}
        onClickOptions={{ passive: true, capture: true }}
      >
        {texts}
      </TagCloud>
    </section>
  );
};
