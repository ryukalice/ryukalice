/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import Link from "next/link";
import { Container } from "components/top/Container";
import { Heading } from "components/top/Heading";

export const Profile = () => (
  <>
    <Container>
      <Heading>プロフィール</Heading>

      <p>
        夫婦でシステム開発のお仕事をしています。福岡県行橋市で猫3匹と生活しています。現在は自社サービス開発企業に夫婦で勤め、Ruby on Rails と Next.js のシステム開発をしています。副業で個人事業主としてシステム開発の仕事や、開発者教育の仕事をしています。<Link href="/blog"><a>ブログ</a></Link>を書いています。
      </p>
    </Container>
  </>
);
