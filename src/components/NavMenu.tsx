import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import styled from "styled-components";
import FadeIn from "./FadeIn";
import ThemeSelector from "./ThemeSelector";

const MenuContainer = styled.nav`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 7;
  background-color: rgba(0, 0, 0, 0.95);
`;

const HamburgerMenuIcon = styled(RiMenu2Fill)`
  position: absolute;
  top: 5rem;
  font-size: 2.5rem;
  fill: #fff;
  cursor: pointer;
  left: 2.4rem;
  z-index: 1;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const CloseMenuIcon = styled(IoIosClose)`
  color: #fff;
  position: absolute;
  right: 2.4rem;
  top: 1rem;
  z-index: 8;
  cursor: pointer;
  font-size: 3.5rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
`;

const NavItem = styled.li`
  font-size: 3rem;
  cursor: pointer;

  & > a {
    color: #fff;
    text-decoration: none;
  }

  & > a:hover {
    filter: drop-shadow(0 0 10px #ccc);
  }
`;

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen ? (
        <CloseMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
      ) : (
        <HamburgerMenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
      )}
      {isMenuOpen && (
        <MenuContainer>
          <FadeIn>
            <NavList>
              <NavItem>
                <a href="">Projects</a>
              </NavItem>
              <NavItem>
                <a href="">Skills</a>
              </NavItem>
              <NavItem>
                <a href="">Contact</a>
              </NavItem>
            </NavList>
          </FadeIn>
          <FadeIn>
            <ThemeSelector onSelectTheme={() => setIsMenuOpen(false)} />
          </FadeIn>
        </MenuContainer>
      )}
    </>
  );
};

export default NavMenu;
