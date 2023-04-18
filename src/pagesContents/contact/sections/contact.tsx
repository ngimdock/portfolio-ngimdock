import clsx from "clsx";
import { useState } from "react";
import { RiLinksLine } from "react-icons/ri";
import { toast } from "react-toastify";
import useIsInViewport from "use-is-in-viewport";
import { sendContactForm } from "../../../api/api";
import { Button } from "../../../components";
import { InputText } from "../../../components/inputs/inputText";
import { TextArea } from "../../../components/inputs/TextArea";
import { SocialMedia, SOCIALS_MEDIAS } from "../../../enums";

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

const initValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  phone: "",
  message: "",
};

const initFormData = { isLoading: false, error: "", values: initValues };

export const Contact = () => {
  const [isInViewport, targetRef] = useIsInViewport();

  const [formData, setFormData] = useState(initFormData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFormData((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const { email, phone } = formData.values;

    // check valid email

    // check valid phone

    // send email

    await sendContactForm(formData.values);

    // console.log({ result });

    setFormData(initFormData);
    toast.success(" Message reçu, je vous reponds dans la journée.");
  };

  const handleChange = (e: any, inputName: string) => {
    setFormData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [inputName]: e.target.value,
      },
    }));
  };

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
          <TextArea
            value={formData.values.message}
            onChange={(e) => handleChange(e, "message")}
          />
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
            disabled={formData.isLoading}
            registerName="object"
            placeholder="Object"
            value={formData.values.subject}
            onChange={(e) => handleChange(e, "subject")}
          />
          <InputText
            isRequired={true}
            disabled={formData.isLoading}
            registerName="name"
            placeholder="Votre nom"
            value={formData.values.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <InputText
            isRequired={true}
            disabled={formData.isLoading}
            registerName="email"
            placeholder="Email"
            type="email"
            value={formData.values.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <InputText
            isRequired={true}
            disabled={formData.isLoading}
            registerName="phone"
            placeholder="Téléphone"
            value={formData.values.phone}
            onChange={(e) => handleChange(e, "phone")}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            classe="hidden sm:block"
            isLoading={formData.isLoading}
          >
            Envoyer
          </Button>
        </div>
      </form>
    </section>
  );
};
