import { AllTypes } from "./types";
import axios from "axios";
//import profileData from "../Mock/employeeList.json";

//get all profile

// export const getProfiles = () => (dispatch) => {
//   try {
//     dispatch({
//       type: AllTypes.GET_PROFILES,
//       payload: profileData,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: AllTypes.PROFILE_ERROR,
//       payload: error,
//     });
//   }
// };

//fake json server https://my-json-server.typicode.com/NeeleshPoojari/fakeJsonServer/user

export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://my-json-server.typicode.com/NeeleshPoojari/fakeJsonServer/user"
    );
    console.log(res.data, "res");
    dispatch({
      type: AllTypes.GET_PROFILES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AllTypes.PROFILE_ERROR,
      payload: error,
    });
  }
};
