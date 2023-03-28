import { Inter } from "@next/font/google";
import { HomeBody } from "../src/pagesContents";
import { Metadata } from "../src/components";
import { Footer } from "../src/pagesCommonSections";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Metadata
        title={`Accueil / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`${process.env.NEXT_PUBLIC_MY_NAME} ${process.env.NEXT_PUBLIC_MY_JOB} - bienvenu sur mon site web personnel, ici vous allez retrouver toutes mes réalisations dans le monde passionant du développement d'applications web.`}
      ></Metadata>

      <HomeBody />
      <Footer />
    </>
  );
}
