import { userActionTypes } from "../constants/userAction.types";

const initialState = {
  loading: false,
  user: {},
  error: "",
  msg: "",
  severity: "",
};

const userReducer = (state = initialState, action) => {
  console.log("Reducer action type ", action.type);
  console.log("Reducer payload", action.payload);
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        error: "",
        msg: action.msg,
        severity: "success",
      };
    default:
      return { ...state };
  }
};
export default userReducer;
