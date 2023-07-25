export type SocialMedia = {
  name: string;
  link: string;
};

export type SocialsMediaNames =
  | "linkedin"
  | "twitter"
  | "github"
  | "medium"
  | "freecodecamp"
  | "whatsapp"
  | "mail";

export const SOCIALS_MEDIAS: Record<SocialsMediaNames, SocialMedia> = {
  linkedin: {
    name: "Linkedin",
    link: process.env.NEXT_PUBLIC_LINK_LINKEDIN as string,
  },

  twitter: {
    name: "Twitter",
    link: process.env.NEXT_PUBLIC_LINK_TWITTER as string,
  },

  github: {
    name: "Github",
    link: process.env.NEXT_PUBLIC_LINK_GITHUB as string,
  },

  medium: {
    name: "Medium",
    link: process.env.NEXT_PUBLIC_LINK_MEDIUM as string,
  },

  freecodecamp: {
    name: "Freecodecamp",
    link: process.env.NEXT_PUBLIC_LINK_FREECODECAMP as string,
  },

  whatsapp: {
    name: "Whatsapp",
    link: `https://wa.me/${process.env.NEXT_PUBLIC_MY_WHATSAPP_PHONE}`,
  },

  mail: {
    name: "Mail",
    link: "mail link",
  },
} as const;
