import clsx from "clsx";

type H4Type = {
  children: any;
  color: "primary" | "dark-2" | "light";
  size: "sm" | "md";
  classe?: string;
};

export const H4 = ({ children, color, size, classe }: H4Type) => {
  return (
    <h4
      className={clsx(
        "font-bold text-md text-light font-Inter letter-shrink animate"
      )}
    >
      {children}
    </h4>
  );
};

const defaultProps: H4Type = {
  children: "titre h4",
  color: "light",
  size: "sm",
};

H4.defaultProps = defaultProps;
