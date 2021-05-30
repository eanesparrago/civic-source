import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;

    @media (max-width: ${(p) => p.theme.breakpoint.desktopL}) {
      font-size: 14px;
    }
  }

  body {
    font-family: ${(p) => p.theme.font.primary};

  }

  html, body, #root{
    min-height: 100%;
  }

  button:focus {
    outline: 1px solid #000000;
  }
`;

export default GlobalStyle;
