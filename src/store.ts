import { createStore } from "redux";
import rootReducer, { RootState } from "./reducers";

const store = createStore(rootReducer);

export default store;

export type AppDispatch = typeof store.dispatch;
export type AppState = RootState;
