import { AllTypes } from "./types";
import profileData from "../Mock/employeeList.json";

//get all profile

export const getProfiles = () => (dispatch) => {
  try {
    dispatch({
      type: AllTypes.GET_PROFILES,
      payload: profileData,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AllTypes.PROFILE_ERROR,
      payload: error,
    });
  }
};
