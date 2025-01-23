import { ThemeProvider } from "styled-components";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import NavMenu from "./components/NavMenu";
import SideMenu from "./components/SideMenu";
import { useTheme } from "./hooks/useTheme";
import GlobalStyles from "./styles/global-styles";
import ProjectSection from "./components/projects/ProjectSection";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavMenu />
      <SideMenu />
      <main>
        <Hero />
        <AboutSection />
        <ProjectSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
