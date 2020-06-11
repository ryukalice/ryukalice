import { MainVisual } from "components/top/MainVisual";
import { Profile } from "components/top/Profile";
import { Skills } from "components/top/Skills";
import { Contact } from "components/top/Contact";

type PostType = {
  id: string;
  title: string;
  date: string;
};

export default function Home() {
  return (
    <>
      <MainVisual />
      <Profile />
      <Skills />
      <Contact />
    </>
  );
}
