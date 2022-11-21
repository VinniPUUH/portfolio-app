import { ICommonState } from "./types";

const reducer = {
  TOGGLE_THEME: (state: ICommonState) => {
    return {
      ...state,
      darkTheme: !state.darkTheme,
    };
  },
};

export default reducer;
