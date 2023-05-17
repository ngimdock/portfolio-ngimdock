import clsx from "clsx";

type TagBgType = {
  children: string | React.ReactNode;
  size: "sm" | "md" | "lg";
  color: "primary" | "dark" | "dark3" | "green";
  textColor?: "white" | "black" | "";
  classe?: string;
};

export const TagBg = ({ size, color, children, classe }: TagBgType) => {
  return (
    <div
      className={clsx(
        size === "sm" && "py-2 px-3.5 text-xs",
        size === "md" && "p-3 px-5 text-xs",
        size === "lg" && "py-3 px-6 text-sm",
        color === "green" &&
          " text-light bg-green-700 hover:bg-green-600 animate",
        color === "dark" && "text text-light bg-dark",
        color === "dark3" && "text-light bg-dark-3",
        "text-center  rounded-full",
        typeof children === "string" ? "inline" : "flex items-center space-x-1",
        classe
      )}
    >
      {children}
    </div>
  );
};
