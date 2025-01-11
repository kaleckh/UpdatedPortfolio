import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { purpleTheme } from "../styles/theme.styles";

interface Theme {
  primary: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const defaultTheme = purpleTheme;

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const existingTheme = localStorage.getItem("portfolio-theme");
    try {
      return existingTheme ? JSON.parse(existingTheme) : defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    if (!localStorage.getItem("portfolio-theme")) {
      localStorage.setItem("portfolio-theme", JSON.stringify(defaultTheme));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
};
