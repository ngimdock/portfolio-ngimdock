import Head from "next/head";

interface metadataProps {
  title: string;
  description: string;
  children?: any;
}

export const Metadata = ({ title, description, children }: metadataProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {children}
    </Head>
  );
};
