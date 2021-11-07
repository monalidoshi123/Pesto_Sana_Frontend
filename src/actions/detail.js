import axios from "axios";
import { FETCH_DETAILS, FETCH_FAIL } from "./types";
import { SERVER_URL } from "../constants";

export const fetchdetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${SERVER_URL}/detail/` + id);
    dispatch({
      type: FETCH_DETAILS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: FETCH_FAIL,
    });
  }
};
