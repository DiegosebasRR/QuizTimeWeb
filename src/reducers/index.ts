import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sessionReducer from "./sessionReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  session: sessionReducer,
  user: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
