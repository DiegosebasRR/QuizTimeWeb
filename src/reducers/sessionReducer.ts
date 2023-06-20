import { Reducer } from "redux";
import { SessionAction } from "../actions/sessionAction";

interface SessionState {
  session: boolean | null;
}

const initialState: SessionState = {
  session: null,
};

const sessionReducer: Reducer<SessionState, SessionAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_SESSION":
      return {
        ...state,
        session: action.payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
