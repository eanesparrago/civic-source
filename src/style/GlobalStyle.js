import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }

  html, body, #root{
    min-height: 100%;
  }
`;

export default GlobalStyle;
