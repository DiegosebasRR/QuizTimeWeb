import { Action } from "redux";
import { UserType } from "../Types/User";
export interface SetUserAction extends Action {
  type: "SET_USER";
  payload: UserType;
}

export interface ClearUserAction extends Action {
  type: "CLEAR_USER";
}

export const setUser = (user: UserType): SetUserAction => ({
  type: "SET_USER",
  payload: user,
});

export const clearUser = (): ClearUserAction => ({
  type: "CLEAR_USER",
});

export type UserAction = SetUserAction | ClearUserAction;
