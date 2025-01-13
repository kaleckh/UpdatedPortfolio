import styled, { css } from "styled-components";
import { greenTheme, pinkTheme, purpleTheme } from "../styles/theme.styles";
import { useTheme } from "../hooks/useTheme";

const ThemeSelect = styled.div`
  outline: 0;
  max-width: 20rem;
  display: inline-flex;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    transform: translateX(2rem);
  }
`;

const ThemeLabel = styled.p`
  letter-spacing: 0.15rem;
  font-size: 1.2rem;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    transform: rotate(270deg);
  }
`;

const ThemeColorWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    transform: translateX(-4rem);
  }
`;

const themeColor = css`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

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
