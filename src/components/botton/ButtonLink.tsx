import clsx from "clsx";
import Link from "next/link";

type ButtonLinkType = {
  children?: any;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "dark" | "dark-2";
  type?: "button" | "link";
  href: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  classe?: string;
  icon?: any;
};

export const ButtonLink = ({
  children,
  size,
  color,
  fullWidth,
  isLoading,
  classe,
  type,
  icon,
  href,
  ...restProps
}: ButtonLinkType) => {
  return (
    <Link
      href={href ? `${href}` : ""}
      className={clsx(
        "flex justify-center space-x-2 items-center text-center text-white text-xs uppercase  font-Inter font-meduim letter-shrink rounded-full hover:-translate-y-1.5 hover:shadow",
        color === "primary" && "bg-primary hover:bg-dark hover:shadow-light",
        color === "dark" && "bg-dark hover:shadow-primary",
        color === "dark-2" && "bg-dark-3 hover:shadow-light hover:bg-dark",
        size === "sm" && "text-sm py-2 px-10",
        size === "lg" ? "text-lg py-5 px-10" : "text-sm py-4 px-10",
        fullWidth && "w-full",
        classe
      )}
      {...restProps}
    >
      <div>
        <p className="text-lg "> {icon}</p>
        <span>{children}</span>
      </div>
    </Link>
  );
};

const defaultProps: ButtonLinkType = {
  size: "md",
  color: "primary",
  children: "Cliquer ici",
  fullWidth: false,
  isLoading: false,
  type: "button",
  href: "/",
};

ButtonLink.defaulProsps = defaultProps;
