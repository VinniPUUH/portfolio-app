import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import GlobalWrap from "components/containers/global-wrap/global-wrap";
import MainPage from "pages/main";
import Blog from "pages/blog";
import BlogPage from "pages/blog/blogPage";

import useTheme from "store/common/useTheme";

import { IThemeStyleProps } from "constants/types/common-types";

import "cssStyles/fonts/fonts.css";

const App = () => {
  const { isDarkTheme } = useTheme();
  return (
    <>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <GlobalWrap>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </GlobalWrap>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle<IThemeStyleProps>`
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => (props.isDarkTheme ? "#121212" : "#ededed")};
    color: ${(props) => (props.isDarkTheme ? "#ffffff" : "#000000")};
  }

  html {
    -webkit-text-size-adjust: 100%; /*для айоса, чтобы размер шрифта не менялся после поворота экрана*/
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  a {
    color: inherit;
    cursor: pointer;
    outline: none;
    text-decoration: none;
  }
  
  button {
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    font-size: inherit;
    font-weight: inherit;
    outline: none;
  }
  
  img {
    color: transparent;
  }
  
  ul {
    list-style-type: none;
  }
  
  input,
  textarea,
  button,
  select,
  div,
  a {
    font-family: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  h1, h2, h3, h4, h5, h6{
    font-weight: 400
  }
`;
