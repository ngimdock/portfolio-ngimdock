import { Footer, Navbar } from "./pagesCommonSections";

type BaseType = {
  children: any;
};

export const Base = ({ children }: BaseType) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
