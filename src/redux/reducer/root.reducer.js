import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import notifyReducer from "./notify.Reducer";
const rootReducer = combineReducers({
  userReducer: userReducer,
  notifyReducer: notifyReducer,
});
export default rootReducer;
