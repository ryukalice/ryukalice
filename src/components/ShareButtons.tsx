import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const Buttons = styled.ul`
  text-align: right;
  list-style: none;
  margin-top: 32px;

  li {
    padding-left: 16px;
    display: inline;
  }
`;

export const ShareButtons = ({ url }: { url: string }) => (
  <Buttons>
    <li>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </li>

    <li>
      <TwitterShareButton url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </li>
  </Buttons>
);
