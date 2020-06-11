import styled from "styled-components";
import media from "styled-media-query";

export const SpBr = styled.br`
  ${media.greaterThan("medium")`
    display: none;
  `}
`;
