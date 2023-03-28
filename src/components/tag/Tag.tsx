import clsx from "clsx";

type TagType = {
  children: string;
  color: "primary" | "light";
};

export const Tag = ({ children, color }: TagType) => {
  return (
    <div
      className={clsx(
        color === "primary" &&
          " border-primary text-primary hover:bg-primary hover:text-light",
        color === "light" &&
          "border-light text-light hover:bg-light hover:text-dark-2",
        "rounded-full border animate text-xs py-1.5 px-5 inline"
      )}
    >
      {children}
    </div>
  );
};

const defaultProps: TagType = {
  children: "tag",
  color: "light",
};

Tag.defaultProps = defaultProps;
