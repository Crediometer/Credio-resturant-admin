import axios from "axios";
import { PASSWORD_FORGET_FAILURE, PASSWORD_FORGET_REQUEST, PASSWORD_FORGET_SUCCESS, REGISTER_BUSINESS_FAILURE, REGISTER_BUSINESS_REQUEST, REGISTER_BUSINESS_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, TRANSFER_DATA } from "./RegisterType";

export const ADD_FORM_DATA = 'ADD_FORM_DATA';

export const addFormData = (formData) => ({
  type: ADD_FORM_DATA,
  payload: formData,
});

export const registerRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};
export const registerSuccess = (register) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: register,
  };
};


export const registerFaliure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};

export const registerBusinessRequest = () => {
  return {
    type: REGISTER_BUSINESS_REQUEST,
  };
};
export const registerBusinessSuccess = (register) => {
  return {
    type: REGISTER_BUSINESS_SUCCESS,
    payload: register,
  };
};
export const registerBusinessFaliure = (error) => {
  return {
    type: REGISTER_BUSINESS_FAILURE,
    payload: error,
  };
};


export const forgetRequest = () => {
  return {
    type: PASSWORD_FORGET_REQUEST,
  };
};
export const forgetSuccess = (register) => {
  return {
    type: PASSWORD_FORGET_SUCCESS,
    payload: register,
  };
};
export const forgetFaliure = (error) => {
  return {
    type: PASSWORD_FORGET_FAILURE,
    payload: error,
  };
};

export const transferData = (data) => {
  return {
    type: TRANSFER_DATA,
    payload: data,
  };
};

// export const traData = (data) => {

//   return async (dispatch) => {

//     dispatch(transferData(data));
//   };
// };
const baseUrl = "https://dinepoint-server.onrender.com/api/v1/auth"
export const registerData = (registerState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(registerRequest())
    try {
      const res = await axios.post(
        `${baseUrl}/verify-email`,
        registerState
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(registerSuccess(data));
        dispatch(transferData(registerState))
      }
    } catch (error) {
      if (error.response){
        dispatch(registerFaliure(error?.response?.data?.error));
      }
      setErrorHandler({ hasError: true, message: error?.response?.data?.message });
    }
  };
};

export const registerBusinessData = (registerState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(registerBusinessRequest())
    try {
      let datas = JSON.parse(localStorage.getItem("auth"))
      const headers = {
          "Content-Type": "application/json",
          authorization: `Bearer ${datas.data.token}`,
      };
      const res = await axios.post(
        `${baseUrl}/save-business-info`,
        registerState, { headers: headers }
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(registerBusinessSuccess(data));
        
      }
    } catch (error) {
      if (error.response){
        dispatch(registerBusinessFaliure(error?.response?.data));
      }
      setErrorHandler({ hasError: true, message: error?.response?.data?.message });
    }
  };
};

export const forgetData = (registerState, history, setErrorHandler) => {
  return async (dispatch) => {
    dispatch(forgetRequest())
    try {
      const res = await axios.post(
        `${baseUrl}/forgot-password`,
        registerState
      );
      const { data } = res;
      if (res.status === 200) {
        history()
        dispatch(forgetSuccess(data));
      }
    } catch (error) {
      if (error.response){
        dispatch(forgetFaliure(error?.response?.data?.error));
      }
      setErrorHandler({ hasError: true, message: error?.response?.data?.message });
    }
  };
};