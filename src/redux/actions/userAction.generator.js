import { userActionTypes } from "../constants/userAction.types";

const userActionObjectGenerator = (actionType, payload = {}) => {
  switch (actionType) {
    case userActionTypes.SET_USER:
      return {
        type: userActionTypes.SET_USER,
        payload: { ...payload },
      };
    default:
      return {
        type: "Invalid Action",
      };
  }
};
export default userActionObjectGenerator;
