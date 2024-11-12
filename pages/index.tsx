import { Inter } from "@next/font/google";
import { HomeBody } from "../src/pagesContents";
import { Metadata } from "../src/components";
import { Footer } from "../src/pagesCommonSections";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Metadata
        title={`Home / ${process.env.NEXT_PUBLIC_MY_NAME}`}
        description={`${process.env.NEXT_PUBLIC_MY_NAME} ${process.env.NEXT_PUBLIC_MY_JOB} - Développement de fonctionnalités, de sites et d'applications web sur mesure pour les petites et moyennes entreprises.`}
      ></Metadata>

      <HomeBody />
      <Footer />
    </>
  );
}
