import { SET_ALERT, REMOVE_ALERT } from "./types";
import * as uuid from "uuid";

export const setAlert = (msg) => (dispatch) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 2000);
};
