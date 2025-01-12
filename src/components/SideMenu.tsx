import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";
import FadeIn from "./FadeIn";

const MenuContainer = styled.aside`
  min-height: 100vh;
  position: fixed;
  background-color: #0c0c15;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem 0;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 5rem;
  align-items: center;
  transform: translateY(3rem);
`;

const MenuItem = styled.li`
  font-size: 1.7rem;
  transform: rotate(270deg);
  cursor: pointer;

  & > a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.15s;
  }

  & > a:hover {
    color: #fff;
  }
`;
const SideMenu = () => {
  return (
    <MenuContainer>
      <FadeIn delay={0}>
        <MenuList>
          <MenuItem>
            <a href="">Projects</a>
          </MenuItem>
          <MenuItem>
            <a href="">Skills</a>
          </MenuItem>
          <MenuItem>
            <a href="">Contact</a>
          </MenuItem>
        </MenuList>
      </FadeIn>
      <FadeIn delay={0}>
        <ThemeSelector />
      </FadeIn>
    </MenuContainer>
  );
};

export default SideMenu;
