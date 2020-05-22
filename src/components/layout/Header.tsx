import styled from "styled-components";
import Link from "next/link";

const Logo = styled.h1`
  font-size: 24px;
`;

const Header = () => (
  <>
    <Link href="/">
      <a>
        <Logo>Ryukalice</Logo>
      </a>
    </Link>
  </>
);

export default Header;
