import { AppProps } from "next/app";
import { GlobalStyle } from "styles/GlobalStyle";
import { Header } from "components/layout/Header";
import { Main } from "components/layout/Main";
import { Footer } from "components/layout/Footer";

const Ryukalice = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </>
  );
};

export default Ryukalice;
