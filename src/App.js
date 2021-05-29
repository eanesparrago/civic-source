import 'destyle.css';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import GlobalStyle from 'style/GlobalStyle';

import Property from 'features/Property';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Property />
    </ThemeProvider>
  );
}

export default App;
