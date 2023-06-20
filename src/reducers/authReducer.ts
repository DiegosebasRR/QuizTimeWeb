import { Reducer } from "redux";
import { AuthAction } from "../actions/authActions";

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "CLEAR_TOKEN":
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
