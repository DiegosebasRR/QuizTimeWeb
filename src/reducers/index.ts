import { combineReducers } from "redux";
import authReducer from "./authReducer";
import sessionReducer from "./sessionReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  session: sessionReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
