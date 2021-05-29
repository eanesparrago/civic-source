import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: ${(p) => p.theme.font.primary};
  }

  html, body, #root{
    min-height: 100%;
  }
`;

export default GlobalStyle;
