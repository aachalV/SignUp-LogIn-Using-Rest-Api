import { userActionTypes } from "../constants/userAction.types";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return {
        ...state,
        user: state.user,
      };
    default:
      return { ...state };
  }
};
export default userReducer;
