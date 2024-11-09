import clsx from "clsx";
import { Button, H2, H4 } from "../components";
import { ButtonLink } from "../components/botton/ButtonLink";
import { ROUTE_CONTACT } from "../lib";

export type CallToACtionType = {
  title: string;
  image: string;
  button: {
    link?: string;
    action?: () => void;
    text: string;
    targetBlack?: boolean;
  };
};

type CallToActionProps = {
  actionData: CallToACtionType;

  classe?: string;
};

const DEFAULT_CALL_TO_ACTION_DATA = {
  image: "contact-call-to-action.jpg",
  // image: "keyboard.jpg",
  title: "Take your web project to the next level.",
  button: {
    link: ROUTE_CONTACT,
    text: "Contact me",
  },
};

export const CallToAction = ({ actionData, classe }: CallToActionProps) => {
  const { button, image, title } = actionData;

  return (
    <section className={clsx("container max-w-[800px]", classe)}>
      <div className="items-center grid-cols-8 p-6 shadow bg-dark shadow-light/20 text-light/5 sm:grid gap-x-2 sm:gap-x-4 sm:p-10 rounded-xl ">
        <div
          style={{
            backgroundImage: `url('/assets/images/${image}')`,
          }}
          className="col-span-3 bg-white bg-center bg-no-repeat bg-cover rounded-lg h-44 sm:hidden"
        ></div>
        <div className="col-span-5 mt-6 text-center sm:py-6 sm:text-left sm:mt-0">
          <H2 size="md">{actionData.title}</H2>
          <div className="flex justify-center mt-8 sm:justify-start ">
            {actionData.button.link && (
              <ButtonLink
                href={button.link as string}
                color="primary"
                classe="inline"
                targetBlack={button.targetBlack}
              >
                {button.text}
              </ButtonLink>
            )}

            {actionData.button.action && (
              <Button color="primary" action={button.action}>
                {button.text}
              </Button>
            )}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('/assets/images/${image}')`,
          }}
          className="hidden h-full col-span-3 bg-white bg-center bg-no-repeat bg-cover rounded-lg sm:block"
        ></div>
      </div>
    </section>
  );
};
