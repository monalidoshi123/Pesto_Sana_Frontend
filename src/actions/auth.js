import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alerts";
import { SERVER_URL } from "../constants";

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${SERVER_URL}/auth/login`);
    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register =
  (firstName, lastName, email, password, location, threshold) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      location,
      threshold,
    });

    try {
      const res = await axios.post(`${SERVER_URL}/auth/register`, body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.data,
      });

      dispatch(loadUser());
    } catch (err) {
      dispatch(setAlert("**Invalid details, Please try again"));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${SERVER_URL}/auth/login`, body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert("**Invalid Credentials, Please try again"));

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
