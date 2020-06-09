import styled from "styled-components";
import Link from "next/link";
import { layoutFontColor } from "styles/Color";

const Wrapper = styled.h1`
  margin: 0 auto;
  width: 100%;
  font-size: 24px;
  line-height: 60px;
  text-align: center;
  justify-content: center;

  > a {
    color: ${layoutFontColor};
    text-decoration: none;
  }
`;

export const Logo = () => (
  <Wrapper>
    <Link href="/">
      <a>Ryukalice</a>
    </Link>
  </Wrapper>
);
