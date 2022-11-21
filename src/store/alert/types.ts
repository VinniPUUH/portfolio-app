interface IAlert {
  id: string;
  message: string;
}

interface IAlertState {
  alerts: IAlert[];
  alertsAllowed: boolean;
}

export { IAlertState, IAlert };
