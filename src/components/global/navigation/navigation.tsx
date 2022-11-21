import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import useTheme from "store/common/useTheme";

import { MAIN_ROUTE, BLOG_ROUTE } from "constants/routes-data";
import { media } from "constants/media";
import { IThemeStyleProps } from "constants/types/common-types";

const Navigation: FC = () => {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <Header>
      <Nav isDarkTheme={isDarkTheme}>
        <NavMenu>
          <NavItem>
            <Link to={MAIN_ROUTE}>Main</Link>
          </NavItem>
          <NavItem>
            <Link to={BLOG_ROUTE}>Blog</Link>
          </NavItem>
        </NavMenu>
        <ThemeIconWrapper isDarkTheme={isDarkTheme}>
          <img
            src={`/img/icons/dark_theme.svg`}
            alt="Swtich theme"
            onClick={toggleTheme}
          />
        </ThemeIconWrapper>
      </Nav>
    </Header>
  );
};

export default Navigation;

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
`;

const Nav = styled.nav<IThemeStyleProps>`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  margin: 0 15px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${(props) => (props.isDarkTheme ? "#898989" : "#a3a3a3")};
  background-color: ${(props) => (props.isDarkTheme ? "#121212" : "#ededed")};

  @media ${media.tablet} {
    margin: 0 30px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 15px;

  &:hover {
    color: #f58c8c;
    transition: color 0.5s;
  }
`;

const ThemeIconWrapper = styled.div<IThemeStyleProps>`
  width: 35px;
  height: 35px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    filter: ${(props) => (props.isDarkTheme ? "invert(1)" : "")};
  }

  &:hover {
    img{filter}
  }
`;
