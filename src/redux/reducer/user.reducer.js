import { userActionTypes } from "../constants/userAction.types";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return { ...state };
  }
};
export default userReducer;
