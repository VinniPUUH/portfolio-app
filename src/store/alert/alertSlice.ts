import { createSlice } from "@reduxjs/toolkit";

import reducer from "./reducer";

import { IAlertState } from "./types";

const initialState: IAlertState = {
  alerts: [],
  alertsAllowed: true,
};

export const Alert = createSlice({
  name: "Alert",
  initialState,
  reducers: reducer,
});

export const actions = Alert.actions;

export default Alert;
