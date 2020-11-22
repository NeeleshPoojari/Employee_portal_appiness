import { AllTypes } from "../actions/types";

const initialState = {
  isLoggedIn: false, 
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AllTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case AllTypes.LOGIN_SUCCESS:
        localStorage.setItem("isLoggedIn", payload )
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case AllTypes.LOGOUT: 
    case AllTypes.LOGIN_FAIL:
    case AllTypes.AUTH_ERROR: 

    localStorage.removeItem('isLoggedIn');
    return {
        ...state,
        isAuthenticated: false,
        loading: false
    }

    default:
      return state;
  }
}
