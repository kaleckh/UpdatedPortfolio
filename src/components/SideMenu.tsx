import styled from "styled-components";
import FadeIn from "./FadeIn";
import ThemeSelector from "./ThemeSelector";

const MenuContainer = styled.aside`
  min-height: 100vh;
  position: absolute;
  background-color: #000;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;
  z-index: 7;
  position: fixed;
  justify-content: space-between;

  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  transform: translateY(3rem);
  gap: 5rem;
  display: flex;
`;

const MenuItem = styled.li`
  font-size: 3rem;
  cursor: pointer;
  transform: rotate(270deg);
  font-size: 1.7rem;

  & > a {
    color: #fff;
    text-decoration: none;
    transition: color 0.15s;
  }
  & > a:hover {
    filter: drop-shadow(0 0 3px #ccc);
  }
`;

const SideMenu = () => {
  return (
    <>
      <MenuContainer>
        <FadeIn>
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
        <FadeIn>
          <ThemeSelector />
        </FadeIn>
      </MenuContainer>
    </>
  );
};

export default SideMenu;
