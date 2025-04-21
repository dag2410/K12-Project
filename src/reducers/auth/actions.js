import authService from "@/service/authService";
import { SET_CURRENT_USER } from "./constants";

export const getCurrentUser = () => {
  return async (dispatch) => {
    try {
      const data = await authService.getCurrentUser();
      dispatch(setCurrentUser(data?.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});
