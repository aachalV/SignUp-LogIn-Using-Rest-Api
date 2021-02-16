import { userActionTypes } from "../constants/userAction.types";
import { api } from "../../api/axios";
import auth from "../../helper/auth";
import config from "../../configuration/Configuration";
import { getCookie } from "../../helper/manageCookies";
export const fetchUserRequest = () => {
  return {
    type: userActionTypes.NOTIFY_REQUEST_FETCH,
  };
};
export const userLoginSuccess = (user) => {
  return {
    type: userActionTypes.SET_USER,
    payload: user,
    error: null,
  };
};
export const notifyLoginSuccess = (msg) => {
  return {
    type: userActionTypes.NOTIFY_LOGIN_SUCCESS,
    error: null,
    msg: msg,
    severity: "success",
  };
};
export const userLoginFailed = (msg) => {
  return {
    type: userActionTypes.NOTIFY_LOGIN_FAILED,
    payload: null,
    error: null,
    msg: msg,
  };
};
export const userRequestFailed = (error) => {
  console.log("userRequestFailed", error);
  return {
    type: userActionTypes.NOTIFY_REQUEST_FAILED,
    payload: null,
    error: error,
    msg: null,
  };
};
export const closeNotification = () => {
  return {
    type: userActionTypes.NOTIFY_CLOSE,
    error: null,
    msg: null,
  };
};
export const userLoginActionGenerator = ({ email, password, route }) => {
  return async (dispatch) => {
    dispatch(fetchUserRequest);
    try {
      const result = await api({
        url: config.LOGIN_URL,
        body: { email, password },
        method: "POST",
      });
      console.log("RESULT Login", result);

      if (result.data.success) {
        dispatch(userLoginSuccess(result.data.user));
        auth.login(result.data.token);
        route.push("/");
        dispatch(notifyLoginSuccess("Login Successful !!"));
      } else {
        console.log(result.data.msg);
        dispatch(userLoginFailed(result.data.msg));
      }
    } catch (error) {
      console.log(error);
      //dispatch(userRequestFailed(error));
    }
  };
};
export const userDashboardActionGenerator = () => {
  return (dispatch) => {
    const token = getCookie("token");
    api({
      url: config.GET_USER_DETAILS,
      headers: { Authorization: `Bearer ${token}` },
      method: "GET",
    })
      .then((response) => {
        let result = response.data;
        if (result.success) {
          dispatch(userLoginSuccess(result.user));
        } else {
          console.log("FAILED");
          dispatch(userLoginFailed(result.data.msg));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(userRequestFailed(error));
      });
  };
};
