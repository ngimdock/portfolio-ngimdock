import { FormValues } from "../../src/pagesContents/contact/sections/contact";

const handler = async (req: any, res: any) => {
  if (!(req.method === "POST"))
    return res.status(400).json({ message: "Bad request" });

  const { email, message, name, phone, subject } = req.body as FormValues;

  try {
    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};

export default handler;
