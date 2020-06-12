/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { Container } from "components/top/Container";
import { Heading } from "components/top/Heading";
import { ExLink } from "components/ExLink";

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

export const Histories = () => (
  <>
    <Container>
      <Heading>経歴</Heading>

      <List>
        <Term>Ruby</Term>
        <Description>
          <p>
            職業紹介サービス、フォトグラファーマッチングサービス、高校生向け就職求人掲載サービス、広告配信サービス等の多くのシステムを Ruby on Rails で開発してきました。また、<ExLink href="https://ogihara-ryo.github.io">旧ブログ</ExLink>は Jekyll で構築していました。Qiita では以下のような技術記事を執筆しています。
          </p>
          <ul>
            <li><ExLink href="https://qiita.com/OgiharaRyo/items/9949e5a2cda5e48060f0">Ruby on Rails と React Native で作る web & モバイルアプリ [webアプリ編] | Qiita</ExLink></li>
            <li><ExLink href="https://qiita.com/OgiharaRyo/items/874936748451845f7218">[Ruby on Rails] Salesforce のオブジェクトを Rails のデータベースに反映する | Qiita</ExLink></li>
            <li><ExLink href="https://qiita.com/OgiharaRyo/items/ee8d5784f0ac12b8d2c5">has_secure_token を後から追加した時に token を埋める | Qiita</ExLink></li>
          </ul>

          <p>
            Redmine プラグイン開発の経験もあります。これを題材にしたモンキーパッチング作法の記事を執筆しています。 <br />
            <ExLink href="https://qiita.com/OgiharaRyo/items/b2ed27d886548fed8864">Redmine プラグイン開発に学ぶパッチング作法 | Qiita</ExLink>
          </p>

          <p>
            前述の通り、<ExLink href="http://railsgirls.com/kitakyushu.html">Rails Girls Kitakyushu</ExLink> では夫婦でオーガナイザーとコーチ代表を行ったり、<ExLink href="http://railsgirls.com/fukuoka.html">Rails Girls Fukuoka</ExLink> でコーチを担当したり等といったコミュニティへの参加も積極的に行っています。<ExLink href="https://rubykaigi.org/2019/">RubyKaigi</ExLink> や <ExLink href="https://2019.rubyworld-conf.org/ja/">RubyWorld Conference</ExLink> 等のイベントにも足を運んでいます。
          </p>
        </Description>

        <Term>JavaScript</Term>
        <Description>
          <p>
            多くの web アプリケーションを開発してきた中で、JavaScript や jQuery は常に使い続けてきました。最近では、API サーバーを Firebase や Ruby on Rails で設けて <ExLink href="https://reactjs.org/">React.js</ExLink> の <ExLink href="https://nextjs.org/">Next.js</ExLink> で組み上げることが増えてきています。前述の通り、本 web サイトは Next.js, TypeScript, styled-components 等を用いたアプリケーションです。
          </p>
        </Description>

        <Term>Mobile</Term>
        <Description>
          <p>
            スマートフォンが普及し始めた SIer 時代、Java で Android のアプリケーションを開発しました。これは遠隔音声放送用のアプリケーションで、プッシュトークで Windows のサーバーに対して音声を送り続けるアプリケーションでした。技術的にはサーバーとの UDP 通信で放送開始/終了の制御を行い、SIP で音声を送信するものです。
          </p>

          <p>
            また、React Native でクロスプラットフォームのモバイルアプリケーションを開発した経験もあります。Ruby on Rails の web アプリケーションにモバイル需要が出てきたので、Ruby on Rails に API を生やして React Native で web アプリケーションと同じような仕様のモバイルアプリケーションを作りました。過去にはこの経験を簡易的に模倣した演習記事を執筆しました。<br />
            <ExLink href="https://qiita.com/OgiharaRyo/items/9d16c935bcf769c82bc4">Ruby on Rails と React Native で作る web & モバイルアプリ [モバイルアプリ編]</ExLink>
          </p>
        </Description>

        <Term>Python</Term>
        <Description>
          <p>
            <ExLink href="https://www.facebook.com/ryo.ogihara.5/posts/1109187332552134">土日で分かる Python プログラミング教室</ExLink> という書籍に執筆協力しました。この書籍は、Python, Django で人工無脳(チャットボット)系の web アプリケーションを開発するものです。コンピュータに自動回答させるにあたって、話しかけられた文章の形態素を解析し、事前に覚えさせた会話データからマルコフ連鎖を用いて回答文を自動生成するまでのアルゴリズムを、この書籍で開発するサンプルアプリケーションのプロトタイプとして提供しました。
          </p>
        </Description>

        <Term>PHP</Term>
        <Description>
          <p>
            SES 企業に勤めていた頃、外部プロジェクトへの支援として PHP で作られたシステムの改修を何度か行ったことがあります。また、個人事業を開業して最初の仕事は CakePHP のシステム改修でした。Laraver 等で1からシステムを開発した経験はありませんが、基礎的な仕事を多少行うことはできます。また、過去のブログやポータルサイトは WordPress で構築しました。現在勤めている企業でも多くのコンテンツ配信サイトは WordPress で構築しています。
          </p>
        </Description>

        <Term>C</Term>
        <Description>
          <p>
            SIer 時代に要素技術開発の部署にいた頃、組み込み系の仕事を行っていました。経験年数で言えば Ruby on Rails の次に歴の長い技術が組み込み系です。OS は Linux と TRON で、Linux においてはカーネルの改修や I/O 関連や ALSA (Advanced Linux Sound Architecture) 関連のデバイスドライバーの開発を行っていました。アプリケーション開発においては、通信機器メーカーに勤めていたので TCP, UDP, RTP 等のプロトコルで電文や音声の通信を行うアプリケーションを多く開発していました。また、それらのプロトコルを低レイヤーで扱うためのライブラリ開発も行っていました。機密性の高い仕事が多かったため、特に記事の執筆等はありませんが、単純な C の教養としてアルゴリズム関連の記事を書いていた頃はありました。
          </p>

          <ul>
            <li><ExLink href="https://ryukalice.com/blog/bubble-sort">バブルソート</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/selection-sort">選択ソート</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/insertion-sort">挿入ソート</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/quick-sort">クイックソート</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/euclidean-algorithm">ユークリッドの互除法</ExLink></li>
          </ul>
        </Description>

        <Term>C++</Term>
        <Description>
          <p>
            プログラマーとしてのキャリアが始まってからの5年間は C と C++ を使っていました。C++ は、Embarcadero の <ExLink href="https://www.embarcadero.com/jp/products/cbuilder">C++Builder</ExLink> を使って Windows のアプリケーションを開発していました。上述の組み込みアプリケーションと同様、TCP, UDP, RTP 等のプロトコルで電文や音声の通信を行うアプリケーションを多く開発していました。ブログに技術記事も多く執筆しており、以下の記事は現代においても一定のアクセスがあります。
          </p>

          <ul>
            <li><ExLink href="https://ryukalice.com/blog/windows-timer">Windows/C++による処理時間計測とtimeBeginPeriod</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/cpp-builder-udp">C++Builder の UDP 送受信サンプル</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/ipv4-to-dot-delete-and-zero-fill">IPv4アドレス文字列の区切り文字(.)を除去して0埋め12Byte文字列に変換する</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/date-time-picker-returned-date">TDateTimePicker の Time プロパティは日付も返す</ExLink></li>
            <li><ExLink href="https://ryukalice.com/blog/conditional-operator-with-datetime">条件演算子は真式と偽式で同じ型の値を返さなければならない</ExLink></li>
          </ul>
        </Description>
      </List>
    </Container>
  </>
);
