import { H2, H3, Para } from "../../../components";
import clsx from "clsx";
import { ButtonLink } from "../../../components/botton/ButtonLink";
import { TextSphere } from "../../../components/textSphere/textSphere";
import { ROUTE_CONTACT } from "../../../lib";

export const About = () => {
  return (
    <section
      className={clsx(
        "container mt-20 lg:mt-8 flex flex-col lg:flex-row items-center"
      )}
    >
      <div className="max-w-2xl text-center lg:text-left">
        <div>
          <div className="flex justify-center lg:justify-start">
            <H3>About</H3>
          </div>
          <H2 classe="mt-3">Software Engineer.</H2>
        </div>
        <p className="mt-3 sm:text-md text-light-dark">
          I build web projects of all sizes, from simple websites to complex
          applications, including SaaS solutions. If you&apos;re looking for a
          Frontend or Fullstack developer, don&apos;t hesitate to get in touch.
        </p>
        <div className="items-center hidden mt-6 space-x-3 lg:flex">
          <ButtonLink href={ROUTE_CONTACT} color="primary">
            Get in touch
          </ButtonLink>
          <ButtonLink
            href={process.env.NEXT_PUBLIC_MY_CV as string}
            targetBlack={true}
            color="dark"
            classe="inline"
          >
            Download resume
          </ButtonLink>
        </div>
      </div>
      <TextSphere />
    </section>
  );
};
