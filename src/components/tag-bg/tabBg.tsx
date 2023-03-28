import clsx from "clsx";

type TagBgType = {
  children: string | React.ReactNode;
  size: "sm" | "md";
  color: "primary" | "dark" | "dark3" | "green";
  textColor?: string;
  classe?: string;
};

export const TagBg = ({ size, color, children, classe }: TagBgType) => {
  return (
    <div
      className={clsx(
        size === "sm" && "py-2 px-3.5",
        size === "md" && "p-3 px-5",
        color === "green" &&
          "text-white bg-green-700 hover:bg-green-600 animate",
        color === "dark" && "text text-white bg-dark",
        color === "dark3" && "text-light bg-dark-3",
        "text-center text-xs rounded-full",
        typeof children === "string" ? "inline" : "flex items-center space-x-1",
        classe
      )}
    >
      {children}
    </div>
  );
};
