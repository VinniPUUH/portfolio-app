import { configureStore } from "@reduxjs/toolkit";

import Alert from "./alert/alertSlice";
import Common from "./common/commonSlice";

export const store = configureStore({
  reducer: { Alert: Alert.reducer, Common: Common.reducer },
});
