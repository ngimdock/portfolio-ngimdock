import clsx from "clsx";

type H2Type = {
  children: any;
  color: "primary" | "dark-2" | "light";
  size: "sm" | "md" | "lg";
  classe?: string;
};

export const H2 = ({ children, color, size, classe }: H2Type) => {
  return (
    <h2
      className={clsx(
        "font-bold  title-h2  font-Inter",
        color === "primary" && "text-primary",
        color === "light" && "text-light",
        color === "dark-2" && "text-dark-2",
        size === "lg" && "text-6xl",
        size === "md" && "text-2xl lg:text-3xl",
        size === "sm" && "text-xl",
        classe
      )}
    >
      {children}
    </h2>
  );
};

const defaultProps: H2Type = {
  color: "light",
  size: "md",
  children: "Titre h2",
};

H2.defaultProps = defaultProps;
