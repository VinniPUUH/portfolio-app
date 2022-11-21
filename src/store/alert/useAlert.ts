import { useDispatch, useSelector } from "react-redux";

import { actions } from "./alertSlice";
import { getAlerts } from "./selectors";

import { IAlert } from "./types";

const useAlert = () => {
  const dispatch = useDispatch();
  const alerts = useSelector(getAlerts);

  const setAlert = (alert: IAlert) => {
    dispatch(actions.SET_ALERT(alert));
  };

  const deleteAlert = (alert: IAlert) => {
    dispatch(actions.DELETE_ALERT(alert));
  };

  return {
    alerts,
    setAlert,
    deleteAlert,
  };
};

export default useAlert;
