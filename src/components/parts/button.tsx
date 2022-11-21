import { FC, ReactNode } from "react";
import styled from "styled-components";

import useTheme from "store/common/useTheme";

import { IThemeStyleProps } from "constants/types/common-types";

interface IButton {
  children: ReactNode;
}

const Button: FC<IButton> = ({ children }) => {
  const { isDarkTheme } = useTheme();

  return <ButtonStyle isDarkTheme={isDarkTheme}>{children}</ButtonStyle>;
};

export default Button;

const ButtonStyle = styled.div<IThemeStyleProps>`
  border-radius: 10px;
  border: 1px solid;
  border-color: ${(props) => (props.isDarkTheme ? "#ffffff" : "#000000")};
  padding: 5px 10px;
`;
