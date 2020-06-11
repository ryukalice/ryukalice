/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-one-expression-per-line */
import styled from "styled-components";
import { ExLink } from "components/ExLink";
import { Container } from "components/top/Container";
import { Heading } from "components/top/Heading";

const List = styled.dl``;

const Term = styled.dt`
  color: #555;
  font-weight: bold;
  margin-bottom: 8px;

  :not(:first-of-type) {
    margin-top: 32px;
  }
`;

const Description = styled.dd`
  margin: 0;
`;

export const Skills = () => (
  <>
    <Container>
      <Heading>得意分野</Heading>

      <List>
        <Term>要件定義・プロトタイピング</Term>
        <Description>
          リモートによるディレクションを得意としています。また、高速なプロトタイピングも得意としており、ディレクション段階でプロトタイプを実際に触ってもらうことで本当に使いやすいものを早期に議論・追求できる環境を提供することを重視しています。
        </Description>

        <Term>フロントエンド</Term>
        <Description>
          技術スタックの中心として <ExLink href="https://reactjs.org/">React.js</ExLink> と <ExLink href="https://nextjs.org/">Next.js</ExLink> を修めています。本 web サイトは Next.js, TypeScript, styled-components 等を用いたアプリケーションです。
        </Description>

        <Term>バックエンド</Term>
        <Description>
          最も愛用しているのは <ExLink href="https://rubyonrails.org/">Ruby on Rails</ExLink> です。<ExLink href="http://railsgirls.com/kitakyushu.html">Rails Girls Kitakyushu</ExLink> では夫婦でオーガナイザーとコーチ代表を行ったり、<ExLink href="http://railsgirls.com/fukuoka.html">Rails Girls Fukuoka</ExLink> でコーチを担当したり等といったコミュニティへの参加も積極的に行っています。<ExLink href="https://rubykaigi.org/2019/">RubyKaigi</ExLink> や <ExLink href="https://2019.rubyworld-conf.org/ja/">RubyWorld Conference</ExLink> 等のイベントにも足を運んでいます。
        </Description>

        <Term>モバイル</Term>
        <Description>
          学生向けのサービス等といったメインターゲットがスマホユーザーの web アプリケーション開発経験が豊富なため、モバイルファーストのコーディングや UI/UX 構築を得意としています。また、<ExLink href="https://reactnative.dev/">React Native</ExLink> によるネイティブアプリケーションの開発経験もあります。
        </Description>

        <Term>テスト</Term>
        <Description>
          アプリケーション開発はテスト駆動開発で行います。テスト駆動開発の文脈では、<ExLink href="https://www.selenium.dev/">Selenium</ExLink> によるシステムテストのみを書くことが多く、それとは別にシステム保守の一環として適切なテストを適切な分量書くことを重視しています。また、多くの組織でテスティング文化を浸透させるためのサポートをしてきました。
        </Description>

        <Term>インフラ</Term>
        <Description>
          <ExLink href="https://azure.microsoft.com/">Microsoft Azure</ExLink> と <ExLink href="https://heroku.com/">Heroku</ExLink> を愛用しています。本 web サイトでは <ExLink href="https://vercel.com/">Vercel</ExLink> を使用しています。また、組み込み系の通信アプリケーション開発の経験から、物理的な機器でネットワークを構築する業務の経験もあります。
        </Description>

        <Term>保守・リファクタリング</Term>
        <Description>
          リリース後も継続して保守運用が続けられる仕事を好んでいます。そのため、CI
          でコーディング規約遵守検査を行う等、普段から保守運用を意識したシステム開発を心がけています。後から入ったプロジェクトで必要なテストを書いてリファクタリングして技術的負債を返却していく業務も得意としています。
        </Description>

        <Term>ドキュメンテーション</Term>
        <Description>
          我々は在宅によるリモート開発しか行いません。そのため、仕様や議論をテキストとしてログに残すこと、 <ExLink href="https://help.github.com/ja/github/managing-your-work-on-github/about-issues">GitHub Issue</ExLink> や <ExLink href="https://redmine.jp/">Redmine</ExLink> 等のタスクトラッキングシステムに残すこと、<ExLink href="https://help.github.com/ja/github/building-a-strong-community/adding-or-editing-wiki-pages">Wiki</ExLink> 等に文書として残すこと、自動テストをドキュメントとして機能させること等に強いこだわりを持っています。
        </Description>

        <Term>教育</Term>
        <Description>
          ソフトウェア開発者の育成を行うことに強い関心があります。チャットツール常駐の技術相談役の仕事や、コードレビューの仕事を行っています。また、ソフトウェア開発者を目指す個人向けメンターの仕事を行った経験もあります。
        </Description>
      </List>
    </Container>
  </>
);
