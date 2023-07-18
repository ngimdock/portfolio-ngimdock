import Link from "next/link";

export interface UnderlineLinkProps {
  link: string;
  text: string;
  targerBlack?: boolean;
}

export function UnderlineLink({ link, text, targerBlack }: UnderlineLinkProps) {
  return (
    <Link
      href={link ? link : ""}
      target={targerBlack ? "_blank" : "_self"}
      className="underline font-Inter hover:text-primary animate"
    >
      {text}
    </Link>
  );
}
