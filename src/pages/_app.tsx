// eslint-disable-next-line no-unused-vars
import { AppProps } from "next/app";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const Ryukalice = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default Ryukalice;
