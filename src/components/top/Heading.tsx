import styled from "styled-components";
import media from "styled-media-query";

export const Heading = styled.h2`
  color: #555;
  font-size: 28px;
  margin-top: 56px;
  ${media.greaterThan("medium")`
    margin-top: 80px;
  `}
`;
