import { v4 as uuidv4 } from "uuid";
import { AllTypes } from "./types";

export const setAlert = (msg, alertType, timeout = 2000) => (dispatch) => {
  const id = uuidv4();

  dispatch({
    type: AllTypes.SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () => dispatch({ type: AllTypes.REMOVE_ALERT, payload: id }),
    timeout
  );
};
