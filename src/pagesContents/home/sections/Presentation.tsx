import clsx from "clsx";
import useIsInViewport from "use-is-in-viewport";

export const Presentation = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container mt-16 md:mt-0 lg:mt-52 animate"
      )}
    >
      <p className="max-w-sm py-0 pl-3 text-base border-l-4 leanding-loose sm:text-md sm:max-w-lg md:text-lg text-light-dark traking-lose md:pl-6 border-primary">
        J'interviens tel un ours dans les équipes techniques des startups et
        scales-up pour accélérer le développement de leurs produits sur le web.
      </p>
    </section>
  );
};
