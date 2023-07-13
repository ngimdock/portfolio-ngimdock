import useIsInViewport from "use-is-in-viewport";
import { H2, H3, Para } from "../components";
import clsx from "clsx";
import React from "react";

export interface FlexSectionData {
  h3?: string;
  h2: string;
  text: string;
  image: string;
  children?: React.ReactNode;
}

export interface FlexSectionProps {
  data: FlexSectionData;
  scrollEffect?: boolean;
  paddingY?: boolean;
}

const defaultClassName =
  "container mt-24 sm:mt-8 m grid-cols-2 space-y-6 text-center sm:space-y-0 sm:grid gap-x-6 lg:gap-x-20 sm:text-left";

export const FlexSectionLeft = ({
  data,
  scrollEffect,
  paddingY,
}: FlexSectionProps) => {
  const [isInViewport, targetRef] = useIsInViewport();

  const { children, h2, text, h3, image } = data;

  return (
    <section
      ref={scrollEffect ? targetRef : null}
      className={clsx(
        !scrollEffect && "visibleDiv noTranslateDiv",
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        defaultClassName
      )}
    >
      <div
        style={{
          backgroundImage: `url('/assets/images/${image}')`,
        }}
        className="w-full  sm:h-auto  bg-center bg-no-repeat bg-cover object-none rounded-2xl"
      ></div>

      <div className={paddingY ? "sm:py-20" : "sm:py-4"}>
        <div className="flex flex-col items-center sm:items-start">
          {h3 && <H3>{h3}</H3>}
          <H2>{h2}</H2>
        </div>
        <div className="mt-5">
          <Para>{text}</Para>
          {children}
        </div>
      </div>
    </section>
  );
};

export const FlexSectionRight = ({
  data,
  scrollEffect,
  paddingY,
}: FlexSectionProps) => {
  const [isInViewport, targetRef] = useIsInViewport();

  const { children, h2, text, h3, image } = data;

  return (
    <section
      ref={scrollEffect ? targetRef : null}
      className={clsx(
        !scrollEffect && "visibleDiv noTranslateDiv",
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        defaultClassName
      )}
    >
      <div className={paddingY ? "sm:py-20" : "sm:py-4"}>
        <div className="flex flex-col items-center sm:items-start">
          {h3 && <H3>{h3}</H3>}
          <H2>{h2}</H2>
        </div>
        <div className="mt-5">
          <Para>{text}</Para>
          {children}
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('/assets/images/${image}')`,
        }}
        className="w-full  sm:h-auto  bg-center bg-no-repeat bg-cover object-none rounded-2xl"
      ></div>
    </section>
  );
};
