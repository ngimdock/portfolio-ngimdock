import clsx from "clsx";

type H2Type = {
  children: any;
  color: "primary" | "dark-2" | "light";
  size: "sm" | "md";
  classe?: string;
};

export const H3 = ({ children, color, size, classe }: H2Type) => {
  return (
    <h3
      className={clsx(
        "font-black  tracking-tighter font-Inter italic leading-10 flex  items-end ",
        color === "primary" && "text-dark-2",
        color === "light" && "text-light",
        color === "dark-2" && "text-dark-2",
        size === "md" && "text-4xl md:text-4xl lg:text-6xl",
        size === "sm" && "text-4xl text-primary",
        classe
      )}
    >
      <span className="block "> {children}</span>
      <span className="block w-6 h-1 ml-2 -translate-y-2 sm:w-10 bg-dark-2"></span>
    </h3>
  );
};

const defaultProps: H2Type = {
  color: "primary",
  size: "md",
  children: "Titre h3",
};

H3.defaultProps = defaultProps;
