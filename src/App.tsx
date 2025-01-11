import { ThemeProvider } from "styled-components";
import Hero from "./components/Hero";
import { useTheme } from "./hooks/useTheme";
import GlobalStyles from "./styles/global-styles";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Hero />
      </main>
    </ThemeProvider>
  );
}

export default App;
