import { ReactNode, FC, useEffect } from "react";

import useTheme from "store/common/useTheme";

import checkFalseString from "utils/checkFalseString";
import { LOCAL_STORAGE_KEYS } from "constants/local-storage";

interface IGlobalWrap {
  children: ReactNode;
}

const GlobalWrap: FC<IGlobalWrap> = ({ children }) => {
  const { isDarkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const localTheme = checkFalseString(
      localStorage.getItem(LOCAL_STORAGE_KEYS.THEME)
    );
    if (isDarkTheme !== localTheme) toggleTheme();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, String(isDarkTheme));
  }, [isDarkTheme]);

  return <>{children}</>;
};

export default GlobalWrap;
