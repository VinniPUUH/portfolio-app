import { IAlertState } from "./types";

const reducer = {
  SET_ALERT: (state: IAlertState, { payload }: any) => {
    const filteredAlerts = state.alerts.filter(
      (alert) => alert?.id !== payload.id
    );

    return { ...state, alerts: [...filteredAlerts, payload] };
  },
  DELETE_ALERT: (state: IAlertState, { payload }: any) => {
    return {
      ...state,
      alerts: state.alerts.filter((alert) => alert.id !== payload.id),
    };
  },
  FORBID_ALERTS: (state: IAlertState) => {
    return { ...state, alertsAllowed: false };
  },
};

export default reducer;
