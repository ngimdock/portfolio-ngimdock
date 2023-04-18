import { FormValues } from "../pagesContents/contact/sections/contact";

export const sendContactForm = async (data: FormValues) => {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
