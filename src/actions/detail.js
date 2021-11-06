import axios from "axios";
import { FETCH_DETAILS, FETCH_FAIL } from "./types";

export const fetchdetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4000/auth/detail/" + id);
    dispatch({
      type: FETCH_DETAILS,
      payload: res.data.data,
    });
  } catch (err) {
    const errors = err.res.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
    dispatch({
      type: FETCH_FAIL,
    });
  }
};
