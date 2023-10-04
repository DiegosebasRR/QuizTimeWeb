import { Reducer } from "redux";
import { UserAction } from "../actions/userActions";
import { UserType } from "../Types/User";
interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
};

const userReducer: Reducer<UserState, UserAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
