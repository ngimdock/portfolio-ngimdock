import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_MY_UNIVERCITY_EMAIL;
const pass = process.env.NEXT_PRIVATE_EMAIL_PASS;

export const transporter = nodemailer.createtransporter({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

export const getEmailWelcomeOptions = () => {
  const template = {
    body: {
      name: "",
      intro: `Welcome to  We're very excited to have you on board.`,
      action: {
        instructions: `To get started with  , please click here:`,
      },
    },
  };
};
