import 'destyle.css';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import GlobalStyle from 'style/GlobalStyle';

import PropertyDetailView from 'features/PropertyDetailView';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <PropertyDetailView />
    </ThemeProvider>
  );
}

export default App;
