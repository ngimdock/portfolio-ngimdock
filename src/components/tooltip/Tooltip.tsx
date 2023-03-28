import clsx from "clsx";
import ReactTooltip from "react-tooltip";

interface Props {
  id: string;
  position: "top" | "right" | "bottom" | "left";
  theme: "dark" | "light" | "success" | "warning" | "error" | "info";
  effect: "solid" | "float";
  size?: "small" | "regular" | "large";
  tooltipContent: any;
  children: any;
  className?: string;
}
export const Tooltip = ({
  id,
  position,
  theme,
  effect,
  size,
  tooltipContent,
  children,
  className,
}: Props) => {
  return (
    <div>
      <ReactTooltip
        id={id}
        place={position}
        type={theme}
        effect={effect}
        className={clsx(
          size === "small" && "max-w-[15rem]",
          size === "regular" && "max-w-[22rem]",
          size === "large" && "max-w-md",
          "text-center",
          className
        )}
      >
        {tooltipContent}
      </ReactTooltip>
      <div data-tip data-for={id}>
        {children}
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  position: "top",
  theme: "dark",
  effect: "solid",
  size: "small",
};
