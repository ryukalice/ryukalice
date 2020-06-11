import styled from "styled-components";
import media from "styled-media-query";
import { Width } from "styles/Layout";

const Wrapper = styled.section`
  padding: 0;
  background-image: url("/images/alice.png");
  background-size: cover;
  background-position: center center;
  background-color: rgba(255, 255, 240, 0.7);
  background-blend-mode: lighten;
  min-height: 400px;

  ${media.greaterThan("medium")`
    min-height: 560px;
  `}
`;

export const Container = styled.div`
  position: relative;
  max-width: ${Width};
  margin: 0 auto;
  padding: 0 24px 12px 24px;

  min-height: 400px;

  ${media.greaterThan("medium")`
    min-height: 560px;
  `}
`;

const Skills = styled.p`
  ${media.lessThan("medium")`
    font-size: 14px;
  `}
  position: absolute;
  right: 0;
  padding-top: 48px;
  text-align: right;
  margin: 0;
  color: #e0e0e0;
  line-height: 240%;
`;

const Message = styled.p`
  position: absolute;
  margin: 0;
  right: 0;
  bottom: 0;
  vertical-align: bottom;
  text-align: right;
  padding-right: 24px;
  padding-bottom: 32px;
  color: #777;
  font-weight: bold;
  font-size: 28px;

  ${media.greaterThan("medium")`
    padding-right: 0;
    padding-bottom: 56px;
  `}
`;

export const MainVisual = () => (
  <Wrapper>
    <Container>
      <Skills>
        Ruby, Ruby on Rails, Python, Django,
        <br />
        PHP, WordPress, CakePHP, Laravel,
        <br />
        JavaScript, React.js, Next.js, Vue.js, React Native
        <br />
        Microsoft Azure, Heroku, Vercel, AWS
        <br />
        C, TRON, C++, C++Builder, Delphi, Java
      </Skills>
      <Message>Ryukalice</Message>
    </Container>
  </Wrapper>
);
