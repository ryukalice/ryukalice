import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Hiragino Kaku Gothic Pro','ヒラギノ角ゴ Pro W3','メイリオ',Meiryo,'ＭＳ Ｐゴシック',sans-serif;
    font-size: 18px;
    line-height: 180%;
    background-color: #fafafa;
    color: #333333;
  }

  article {
    h1 {
      font-size: 26px;
      line-height: 150%;
      margin-top: 60px;
      margin-bottom: 32px;
    }

    h2 {
      font-size: 22px;
      line-height: 150%;
      margin-top: 40px;
      padding-bottom: 8px;
      border-bottom: solid 3px #555555;
    }

    h3 {
      font-size: 20px;
      font-weight: normal;
      text-align: left;
      border-bottom: 2px solid $break_border_color;
      margin: 32px 0 8px 0;
      padding: 15px 0 5px 0;
    }

    h4 {
      font-size: 18px;
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

    ul {
      padding: 0;
    }

    li {
      margin-left: 24px;
      margin-top: 8px;
      list-style: square;
    }

    a {
      color: #00a0f0;
    }

    p {
      margin-top: 32px;
    }
  }

  a:hover {
    color: #e01090;
    transition: all 0.2s ease;
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
