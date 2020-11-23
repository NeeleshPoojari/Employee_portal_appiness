import { AllTypes } from "./types";
import { setAlert } from "./alert";
import axios from "axios";
//import userAuth from "../../src/Mock/registeredUser.json";

//Load User
export const loadUser = () => async (dispatch) => {
  
  const authUser = await axios.get(
    "https://my-json-server.typicode.com/NeeleshPoojari/fakeJsonAuth/userAuth"
  );

  
  if (localStorage && localStorage.isLoggedIn && localStorage.isLoggedIn === authUser.data.username) {
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

// export const login = (email, password) => (dispatch) => {
//   if (email === userAuth.username && password === userAuth.password) {
//     dispatch({
//       type: AllTypes.LOGIN_SUCCESS,
//       payload: userAuth.username,
//     });
//   } else {
//     dispatch(setAlert("Username or password incorrect", "danger"));

//     dispatch({
//       type: AllTypes.LOGIN_FAIL,
//     });
//   }
//

// Login user
//fake response https://my-json-server.typicode.com/NeeleshPoojari/fakeJsonAuth/userAuth;

export const login = (email, password) => async (dispatch) => {
  try {
    const userAuth = await axios.get(
      "https://my-json-server.typicode.com/NeeleshPoojari/fakeJsonAuth/userAuth"
    );

    console.log("userAuth", userAuth);

    if (
      email === userAuth.data.username &&
      password === userAuth.data.password
    ) {
      dispatch({
        type: AllTypes.LOGIN_SUCCESS,
        payload: userAuth.data.username,
      });
    } else {
      dispatch(setAlert("Username or password incorrect", "danger"));

      dispatch({
        type: AllTypes.LOGIN_FAIL,
      });
    }
  } catch (error) {
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
