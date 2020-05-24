// eslint-disable-next-line no-unused-vars
import { AppProps } from "next/app";
import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Footer from "components/layout/Footer";

const Ryukalice = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
};

export default Ryukalice;
