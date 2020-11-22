import { AllTypes } from "../actions/types";

const initialState = {
  profiles: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AllTypes.GET_PROFILES:
      return {
        ...state,
        profiles: payload.user,
        loading: false,
      };

    case AllTypes.PROFILE_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
