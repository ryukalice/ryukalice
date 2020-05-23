import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.header`
  position: fixed;
  height: 80px;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Header = () => (
  <HeaderWrapper>
    <Link href="/">
      <a>
        <Logo>Ryukalice</Logo>
      </a>
    </Link>
  </HeaderWrapper>
);

export default Header;
