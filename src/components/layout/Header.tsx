import styled from "styled-components";
import Link from "next/link";
import { layoutColor, layoutFontColor } from "styles/Color";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: ${layoutColor};
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1080px;
`;

const Logo = styled.h1`
  display: flex;
  margin: 0 auto 0 0;
  font-size: 24px;
  line-height: 60px;
  justify-content: center;
  align-items: center;

  > a {
    color: ${layoutFontColor};
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;

  > ul li {
    display: inline;
    margin-left: 20px;

    > a {
      color: ${layoutFontColor};
      text-decoration: none;
    }
  }
`;

type NavListProps = {
  href: string;
  children: string | JSX.Element | JSX.Element[];
};

const NavList = ({ href, children }: NavListProps) => (
  <li>
    <Link href={href}>
      <a>{children}</a>
    </Link>
  </li>
);

const Header = () => (
  <Wrapper>
    <Container>
      <Logo>
        <Link href="/">
          <a>Ryukalice</a>
        </Link>
      </Logo>

      <Nav>
        <ul>
          <NavList href="/about">About</NavList>
          <NavList href="/blog">Blog</NavList>
          <NavList href="/article">Article</NavList>
          <NavList href="/contact">Contact</NavList>
        </ul>
      </Nav>
    </Container>
  </Wrapper>
);

export default Header;
