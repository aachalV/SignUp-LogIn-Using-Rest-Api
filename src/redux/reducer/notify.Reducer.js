import { userActionTypes } from "../constants/userAction.types";

const initialState = {
  loading: false,
  msg: "",
  error: "",
  severity: "",
};

const notifyReducer = (state = initialState, action) => {
  console.log("NOTIFY Reducer", action.error);
  switch (action.type) {
    case userActionTypes.NOTIFY_REQUEST_FETCH:
      return {
        ...state,
        loading: true,
        severity: "info",
      };
    case userActionTypes.NOTIFY_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        error: null,
        severity: "success",
      };
    case userActionTypes.NOTIFY_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        msg: action.msg,
        error: null,
        severity: "info",
      };
    case userActionTypes.NOTIFY_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        msg: null,
        error: action.error,
        severity: "error",
      };
    case userActionTypes.NOTIFY_CLOSE:
      return {
        ...state,
        loading: false,
        msg: null,
        error: null,
        severity: null,
      };
    default:
      return { ...state };
  }
};
export default notifyReducer;
