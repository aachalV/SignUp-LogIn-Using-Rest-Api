import { userActionTypes } from "../constants/userAction.types";
import { api } from "../../api/axios";
import auth from "../../helper/auth";
import config from "../../configuration/Configuration";
import { getCookie } from "../../helper/manageCookies";

// export const userActionObjectGenerator = (actionType, payload = {}) => {
//   switch (actionType) {
//     case userActionTypes.SET_USER:
//       return {
//         type: userActionTypes.SET_USER,
//         payload: { ...payload },
//       };
//     default:
//       return {
//         type: "Invalid Action",
//       };
//   }
// };

export const fetchUserRequest = () => {
  return {
    type: userActionTypes.FETCH_USER_REQUEST,
  };
};
export const userLoginSuccess = (user) => {
  return {
    type: userActionTypes.SET_USER,
    payload: user,
  };
};
export const userLoginFailed = (error) => {
  return {
    type: userActionTypes.USER_LOGIN_FAILED,
    payload: error,
  };
};
export const userLoginActionGenerator = ({ email, password, route }) => {
  return async (dispatch) => {
    //dispatch(fetchUserRequest);
    try {
      const result = await api({
        url: config.LOGIN_URL,
        body: { email, password },
        method: "POST",
      });
      console.log("RESULT Login", result);

      if (result.data.success) {
        console.log(result.data);
        dispatch(userLoginSuccess(result.data.user));
        auth.login(result.data.token);
        route.push("/");
      } else {
        alert(result.data.msg);
        console.log(result.data.msg);
        //dispatch(userLoginFailed(result.data.msg));
      }
    } catch (error) {
      console.log(error);
      //dispatch(userLoginFailed(error));
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
        dispatch(userLoginFailed(error));
      });
  };
};
