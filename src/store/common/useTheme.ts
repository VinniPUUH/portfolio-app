import { useDispatch, useSelector } from "react-redux";

import { actions } from "./commonSlice";
import { getTheme } from "./selectors";

const useTheme = () => {
  const dispatch = useDispatch();
  const isDarkTheme: boolean = useSelector(getTheme);

  const toggleTheme = () => {
    dispatch(actions.TOGGLE_THEME());
  };

  return {
    isDarkTheme,
    toggleTheme,
  };
};

export default useTheme;
