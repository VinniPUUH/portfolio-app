import { createSlice } from "@reduxjs/toolkit";

import reducer from "./reducer";

import { ICommonState } from "./types";

const initialState: ICommonState = {
  darkTheme: false,
};

export const Common = createSlice({
  name: "Common",
  initialState,
  reducers: reducer,
});

export const actions = Common.actions;

export default Common;
