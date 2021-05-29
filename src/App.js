import 'destyle.css';
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>Test</div>
    </ThemeProvider>
  );
}

export default App;
