/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
import styled from "styled-components";
import { ExLink } from "components/ExLink";
import { Container } from "components/top/Container";
import { Heading } from "components/top/Heading";

const List = styled.ul`
  padding-left: 32px;
`;

const Item = styled.li``;

export const Contact = () => (
  <>
    <Container>
      <Heading>アカウント</Heading>
      <p>仕事依頼、技術相談、ゲームのお誘い、フォロー、雑談等はお気軽にどうぞ。</p>

      <List>
        <Item>GitHub: <ExLink href="https://github.com/ogihara-ryo">ogihara-ryo</ExLink></Item>

        <Item>Facebook: <ExLink href="https://www.facebook.com/ryo.ogihara.5">Ogihara Ryo</ExLink></Item>

        <Item>Twitter: <ExLink href="https://twitter.com/ryo_ryukalice">@ryo_ryukalice</ExLink></Item>

        <Item>RESUME: <ExLink href="https://www.resume.id/ogihara_ryo">Ogihara Ryo</ExLink></Item>

        <Item>PSNID: ryo021021</Item>

        <Item>Switch: SW-1758-5832-4786</Item>

        <Item>Email: <a href="mailto:ryo@ryukalice.com">ryo@ryukalice.com</a></Item>
      </List>
    </Container>
  </>
);
