import { useCallback } from "react";

import useAlert from "store/alert/useAlert";

const useAuthorSibscribe = (
  isSubscribed: boolean,
  setSubscribed: React.Dispatch<React.SetStateAction<boolean>>,
  id: string
) => {
  const { setAlert } = useAlert();

  const subscribeHandler = useCallback(
    (event: any) => {
      event.preventDefault();
      if (isSubscribed) {
        setSubscribed(false);
        setAlert({
          id: `card-${id}`,
          message: "You unsubscribed from the author!",
        });
      } else {
        setSubscribed(true);
        setAlert({
          id: `card-${id}`,
          message: "You subscribed to the author!",
        });
      }
    },
    [isSubscribed, setSubscribed, id]
  );

  return { subscribeHandler };
};

export default useAuthorSibscribe;
