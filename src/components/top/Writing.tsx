/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import { Container } from "components/top/Container";
import { Heading } from "components/top/Heading";
import { ExLink } from "components/ExLink";

export const Writing = () => (
  <>
    <Container>
      <Heading>執筆</Heading>
      <p>
        文章を書くことを趣味にしています。小学生の頃にゲームの攻略ブログを書き始めたことから始まり、中学以降は所属バンドの web サイトにブログを書いていました。社会人になってからは技術提供や自らの思想を残すための記事執筆を行っています。そのためか文章力について評価して頂くことが多いです。本サイトではまだ過去ブログからの記事移行やスタイリングが進んでおらず雑多に並べただけですが、<ExLink href="https://ryukalice.com/blog">こちら</ExLink> から過去の記事を一部読むことができます。
      </p>

      <p>技術に関しては Qiita に演習関連の記事を書いています。</p>
      <ul>
        <li>
          <ExLink href="https://qiita.com/OgiharaRyo/items/b2ed27d886548fed8864">
            Redmine プラグイン開発に学ぶパッチング作法 | Qiita
          </ExLink>
        </li>
        <li>
          <ExLink href="https://qiita.com/OgiharaRyo/items/9949e5a2cda5e48060f0">
            Ruby on Rails と React Native で作る web & モバイルアプリ
            [webアプリ編] | Qiita
          </ExLink>
        </li>
        <li>
          <ExLink href="https://qiita.com/OgiharaRyo/items/9d16c935bcf769c82bc4">
            Ruby on Rails と React Native で作る web & モバイルアプリ
            [モバイルアプリ編] | Qiita
          </ExLink>
        </li>
      </ul>

      <p>技術とは関係なく、IT業界そのものに対しての思想や、ITエンジニアを目指す方々へ向けた記事もよく読まれています。</p>
      <ul>
        <li>
          <ExLink href="https://ryukalice.com/blog/career-path">web系エンジニアへのキャリアチェンジについて</ExLink>
        </li>
        <li>
          <ExLink href="https://ryukalice.com/blog/to-newbie">駆け出しエンジニアの皆様へ</ExLink>
        </li>
        <li>
          <ExLink href="https://ryukalice.com/blog/motivation">内発的モチベーションに頼って勉強することを諦める話</ExLink>
        </li>
        <li>
          <ExLink href="https://ryukalice.com/blog/full-remote">フルリモートに対する否定意見について</ExLink>
        </li>
      </ul>

      <p>最後に、私はヘビーゲーマーなので稀にゲームに関する記事を書くこともあります。そのゲームをプレイしたことのある方には楽しんで頂けているようです。</p>
      <ul>
        <li>
          <ExLink href="https://note.com/ryo_ryukalice/n/n953d21f66d91">本当に下手な人のための Apex Legends シーズン5 | note</ExLink>
        </li>
        <li>
          <ExLink href="https://note.com/ryo_ryukalice/m/m939dbeb01ce7">ゼノブレイド2を隅々まで楽しもう(マガジン) | note</ExLink>
        </li>
        <li>
          <ExLink href="https://ryukalice.com/blog/freestyle">3on3 FreeStyle というゲームについて語る</ExLink>
        </li>
      </ul>
    </Container>
  </>
);
