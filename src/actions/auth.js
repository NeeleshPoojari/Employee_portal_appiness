import { AllTypes } from "./types";
import { setAlert } from "./alert";
import userAuth from "../../src/Mock/registeredUser.json";

//Load User
export const loadUser = () => (dispatch) => {
  if (
    localStorage.isLoggedIn &&
    localStorage.isLoggedIn === userAuth.username
  ) {
    dispatch({
      type: AllTypes.USER_LOADED,
      payload: localStorage.isLoggedIn,
    });
  } else {
    dispatch({
      type: AllTypes.AUTH_ERROR,
    });
  }
};

// Login user
export const login = (email, password) => (dispatch) => {
  if (email === userAuth.username && password === userAuth.password) {
    dispatch({
      type: AllTypes.LOGIN_SUCCESS,
      payload: userAuth.username,
    });
  } else {
    dispatch(setAlert("Username or password incorrect", "danger"));

    dispatch({
      type: AllTypes.LOGIN_FAIL,
    });
  }
};

//Logout user

export const logout = () => (dispatch) =>
  dispatch({
    type: AllTypes.LOGOUT,
  });
