import { FC, useEffect } from "react";

import useAlert from "store/alert/useAlert";

import { IAlert } from "store/alert/types";

interface IAlertBase {
  alert: IAlert;
}

const AlertBase: FC<IAlertBase> = ({ alert }) => {
  const { deleteAlert } = useAlert();

  useEffect(() => {
    setTimeout(() => {
      deleteAlert(alert);
    }, 5000);
  }, []);

  return <div>{alert.message}</div>;
};

export default AlertBase;
