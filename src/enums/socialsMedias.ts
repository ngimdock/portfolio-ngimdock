export type SocialMedia = {
  name: string;
  link: string;
};

export type SocialsMediaNames =
  | "linkedin"
  | "twitter"
  | "github"
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

  freecodecamp: {
    name: "Freecodecamp",
    link: process.env.NEXT_PUBLIC_LINK_FREECODECAMP as string,
  },

  whatsapp: {
    name: "whatsapp",
    link: "whatsapp link",
  },

  mail: {
    name: "Mail",
    link: "mail link",
  },
} as const;
