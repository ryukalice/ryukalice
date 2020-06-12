import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
    font-size: 18px;
    line-height: 180%;
    background-color: #fafafa;
    color: #333333;
    word-break: break-all;
  }

  p {
    margin-top: 28px;
  }

  ul {
    padding-left: 32px;
  }

  article {
    .posted-on {
      color: #aaa;
      text-align: right;
    }

    h1 {
      color: #444444;
      font-size: 26px;
      line-height: 150%;
      margin-top: 60px;
      margin-bottom: 8px;
    }

    h2 {
      font-size: 24px;
      font-weight: normal;
      text-align: left;
      border-left: 5px solid #666;
      margin: 64px 0 8px 0px;
      padding: 8px 0 8px 8px;
    }

    h2:nth-of-type(1) {
      margin-top: 32px;
    }

    h3 {
      font-size: 22px;
      font-weight: normal;
      text-align: left;
      border-bottom: 2px solid #ccc;
      margin: 32px 0 8px 0;
      padding: 15px 0 5px 0;
    }

    h4 {
      font-size: 20px;
      font-weight: normal;
      text-align: left;
      margin: 32px 0 -20px 0;
      padding: 15px 0 0 0;
    }
    
    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }

    ul, ol {
      padding: 0;
    }

    ul {
      list-style: square;
    }

    li {
      margin-left: 24px;
      margin-top: 8px;
    }

    p {
      margin-top: 28px;
    }
  }


  a {
    color: #888;

    :hover {
      color: #ff6600;
      transition: all 0.2s ease;
    }
  }

  code {
    font-family: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  }

  blockquote {
    position: relative;
    margin: 2em 0;
    padding: 16px 16px 16px 16px;
    font-style: italic;
    border-left: 4px solid #CCC;
    border-radius: 2px;

    :after {
      position: absolute;
      bottom: 0;
      right: 0;
      content: '”';
      font-family: sans-serif;
      font-size: 6em;
      opacity: .1;
    }

    p {
      margin: 0;
    }

    cite {
      display: block;
      text-align: right;
      padding-top: 16px;
      font-size: 14px;
      color: #555555;
    }
  }
`;
