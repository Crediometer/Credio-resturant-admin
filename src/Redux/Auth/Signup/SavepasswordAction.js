import axios from "axios";
import { PASSWORD_USER_FAILURE, PASSWORD_USER_REQUEST, PASSWORD_USER_SUCCESS } from "./SavepasswordType";

export const passwordRequest = () => {
  return {
    type: PASSWORD_USER_REQUEST,
  };
};
export const passwordSuccess = (register) => {
  return {
    type: PASSWORD_USER_SUCCESS,
    payload: register,
  };
};


export const passwordFaliure = (error) => {
  return {
    type: PASSWORD_USER_FAILURE,
    payload: error,
  };
};
const baseUrl = "https://dinepoint-server.onrender.com/api/v1/auth"
export const passwordData = (passwordState, history, setErrorHandler) => {
    return async (dispatch) => {
        dispatch(passwordRequest())
      try {
        const res = await axios.post(
          `${baseUrl}/save-account-info`,
          passwordState
        );
        const { data } = res;
        if (res.status === 201) {
          history()
          dispatch(passwordSuccess(data));
          localStorage.setItem("auth", JSON.stringify(data));
        }
      } catch (error) {
        if (error.response) {
          dispatch(passwordFaliure(error));
        }
        setErrorHandler({ hasError: true, message: error?.response});
      }
    };
  };