import { userActionTypes } from "../constants/userAction.types";

const initialState = {
  loading: false,
  user: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        error: "",
      };
    default:
      return { ...state };
  }
};
export default userReducer;
