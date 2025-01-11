import styled, { css } from "styled-components";
import { greenTheme, pinkTheme, purpleTheme } from "../styles/theme.styles";
import { useTheme } from "../hooks/useTheme";

const ThemeSelect = styled.div`
  outline: 0;
  max-width: 20rem;
  display: inline-flex;
  transform: translateX(2rem);
`;

const ThemeLabel = styled.p`
  transform: rotate(270deg);
  letter-spacing: 0.15rem;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const ThemeColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateX(-3rem);
`;

const themeColor = css`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  &.selected {
    outline: 1.5px solid #fff;
    outline-offset: 2px;
  }
`;

const GreenTheme = styled.div`
  ${themeColor}
  background-color:#16F8B6;
`;
const PurpleTheme = styled.div`
  ${themeColor}
  background-color: #8244FF;
`;
const PinkTheme = styled.div`
  ${themeColor}
  background-color: #F926AE;
`;

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <ThemeSelect>
      <ThemeLabel>Theme</ThemeLabel>
      <ThemeColorWrapper>
        <GreenTheme
          className={theme.primary === "#16F8B6" ? "selected" : ""}
          onClick={() => setTheme(greenTheme)}
        />
        <PurpleTheme
          className={theme.primary === "#8244FF" ? "selected" : ""}
          onClick={() => setTheme(purpleTheme)}
        />
        <PinkTheme
          className={theme.primary === "#F926AE" ? "selected" : ""}
          onClick={() => setTheme(pinkTheme)}
        />
      </ThemeColorWrapper>
    </ThemeSelect>
  );
};

export default ThemeSelector;
