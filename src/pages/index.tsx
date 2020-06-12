import Head from "next/head";
import { MainVisual } from "components/top/MainVisual";
import { Profile } from "components/top/Profile";
import { Skills } from "components/top/Skills";
import { Histories } from "components/top/Histories";
import { Writing } from "components/top/Writing";
import { Contact } from "components/top/Contact";

type PostType = {
  id: string;
  title: string;
  date: string;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryukalice</title>
        <meta key="ogtitle" property="og:title" content="Ryukalice" />
      </Head>
      <MainVisual />
      <Profile />
      <Skills />
      <Histories />
      <Writing />
      <Contact />
    </>
  );
}
