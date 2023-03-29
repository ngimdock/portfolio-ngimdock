import clsx from "clsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiLinksLine } from "react-icons/ri";
import { toast } from "react-toastify";
import useIsInViewport from "use-is-in-viewport";
import { Button } from "../../../components";
import { InputText } from "../../../components/inputs/inputText";
import { TextArea } from "../../../components/inputs/TextArea";
import { SocialMedia, SOCIALS_MEDIAS } from "../../../enums";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export const Contact = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  const {
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmit = (e) => {
    
    e.
    toast.success(" Message reçu, je vous reponds dans la journée.");

    toast.error("Une erreur est survenue !");
  };

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const handleChange = ({ target }: { target: any }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const socialsMedias: SocialMedia[] = [
    {
      name: "Whatsapp",
      link: "link",
    },
    SOCIALS_MEDIAS.linkedin,
    SOCIALS_MEDIAS.twitter,
  ];

  return (
    <section
      ref={targetRef}
      className={clsx(
        isInViewport ? "visibleDiv noTranslateDiv" : "hiddenDiv translateDiv",
        "container flex flex-col-reverse gap-x-8  gap-y-20 md:space-y-0  md:grid grid-cols-10 separed-sections"
      )}
    >
      <div className="col-span-3">
        <ul className="grid">
          {socialsMedias.map(({ link, name }, index) => (
            <li key={index} className="w-full text-center md:text-start">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-light flex items-center space-x-2 w-full py-2 text-sm text-light hover:bg-dark hover:px-3 animate  px-1.5 animate font-Inter"
              >
                <RiLinksLine /> <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col-reverse grid-cols-2 col-span-7 gap-y-5 sm:gap-y-0 sm:grid cla gap-x-5"
      >
        <div>
          <TextArea />
          <Button
            type="submit"
            color="primary"
            fullWidth
            classe="sm:hidden mt-5"
          >
            Envoyer
          </Button>

          <input type="submit" value="send" />
        </div>
        <div className="space-y-5">
          <InputText
            isRequired={true}
            registerName="object"
            placeholder="Object"
            value="hello"
          />
          <InputText value="guy" registerName="name" placeholder="Votre nom" />
          <InputText
            value="how are you"
            registerName="phone"
            placeholder="Votre numéro"
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            classe="hidden sm:block"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </section>
  );
};
