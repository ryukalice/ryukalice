import styled from "styled-components";
import { layoutColor } from "styles/Color";
import { Logo } from "components/layout/header/Logo";

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: ${layoutColor};
`;

export const Header = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
);
